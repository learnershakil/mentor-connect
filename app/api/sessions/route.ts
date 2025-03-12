import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const userRole = session.user.role;
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "all"; // upcoming, past, all
    
    // Build filter conditions
    let where: any = {};
    
    if (userRole === "MENTEE") {
      where.mentee = {
        userId
      };
    } else if (userRole === "MENTOR") {
      where.mentor = {
        userId
      };
    }
    
    if (status === "upcoming") {
      where.startTime = {
        gte: new Date()
      };
    } else if (status === "past") {
      where.startTime = {
        lt: new Date()
      };
    }

    // Get sessions
    const sessions = await prisma.mentorSession.findMany({
      where,
      include: {
        mentor: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          }
        },
        mentee: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          }
        }
      },
      orderBy: {
        startTime: status === "past" ? "desc" : "asc"
      }
    });

    return NextResponse.json({
      sessions: sessions.map(session => ({
        id: session.id,
        topic: session.topic,
        description: session.description,
        startTime: session.startTime,
        endTime: session.endTime,
        status: session.status,
        meetingLink: session.meetingLink,
        notes: session.notes,
        mentor: {
          id: session.mentor.id,
          userId: session.mentor.userId,
          name: session.mentor.user.name,
          image: session.mentor.user.image
        },
        mentee: {
          id: session.mentee.id,
          userId: session.mentee.userId,
          name: session.mentee.user.name,
          image: session.mentee.user.image
        },
        duration: Math.round((new Date(session.endTime).getTime() - new Date(session.startTime).getTime()) / 60000)
      }))
    });
  } catch (error) {
    console.error("Sessions fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch sessions" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await request.json();
    const { mentorId, topic, description, startTime, endTime, meetingLink } = body;

    if (!mentorId || !topic || !startTime || !endTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find mentee profile
    const menteeProfile = await prisma.menteeProfile.findUnique({
      where: { userId }
    });

    if (!menteeProfile) {
      return NextResponse.json(
        { error: "Mentee profile not found" },
        { status: 404 }
      );
    }

    // Create session
    const newSession = await prisma.mentorSession.create({
      data: {
        topic,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        status: "SCHEDULED",
        meetingLink,
        mentor: {
          connect: { id: mentorId }
        },
        mentee: {
          connect: { id: menteeProfile.id }
        }
      },
      include: {
        mentor: {
          include: {
            user: {
              select: {
                name: true,
                email: true
              }
            }
          }
        },
        mentee: {
          include: {
            user: {
              select: {
                name: true,
                email: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json(newSession, { status: 201 });
  } catch (error) {
    console.error("Session creation error:", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}
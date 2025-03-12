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

    const { searchParams } = new URL(request.url);
    const industry = searchParams.get("industry");
    const skill = searchParams.get("skill");
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const skip = (page - 1) * pageSize;

    // Build filter conditions
    const where: any = {
      user: {
        role: "MENTOR"
      }
    };

    if (industry) {
      where.industry = industry;
    }

    if (skill) {
      where.skills = {
        some: {
          name: {
            contains: skill,
            mode: 'insensitive'
          }
        }
      };
    }

    // Get mentors
    const mentors = await prisma.mentorProfile.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        },
        skills: true,
        testimonials: {
          take: 2,
          include: {
            mentee: {
              include: {
                user: {
                  select: {
                    name: true,
                    image: true
                  }
                }
              }
            }
          }
        }
      },
      skip,
      take: pageSize,
      orderBy: {
        rating: 'desc'
      }
    });

    // Get total count for pagination
    const totalMentors = await prisma.mentorProfile.count({ where });

    return NextResponse.json({
      mentors: mentors.map(mentor => ({
        id: mentor.id,
        userId: mentor.user.id,
        name: mentor.user.name,
        image: mentor.user.image,
        title: mentor.title,
        company: mentor.company,
        industry: mentor.industry,
        yearsOfExperience: mentor.yearsOfExperience,
        skills: mentor.skills.map(skill => skill.name),
        rating: mentor.rating,
        bio: mentor.bio,
        testimonials: mentor.testimonials.map(t => ({
          id: t.id,
          text: t.text,
          rating: t.rating,
          mentee: {
            name: t.mentee.user.name,
            image: t.mentee.user.image
          }
        }))
      })),
      pagination: {
        total: totalMentors,
        pages: Math.ceil(totalMentors / pageSize),
        page,
        pageSize
      }
    });
  } catch (error) {
    console.error("Mentors fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch mentors" },
      { status: 500 }
    );
  }
}
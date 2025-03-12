import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    
    // Get user profile with all dashboard data
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        menteeProfile: {
          include: {
            careerPath: true,
            completedSkills: true,
            mentorSessions: {
              where: {
                startTime: {
                  gte: new Date(),
                },
              },
              include: {
                mentor: {
                  include: {
                    user: {
                      select: {
                        name: true,
                        image: true,
                      },
                    },
                  },
                },
              },
              orderBy: {
                startTime: 'asc',
              },
              take: 3,
            },
          },
        },
        activities: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 4,
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get recommended resources based on the user's career path
    const recommendedResources = await prisma.resource.findMany({
      where: {
        careerPaths: {
          some: {
            id: user.menteeProfile?.careerPathId || '',
          },
        },
      },
      take: 3,
    });

    // Calculate learning hours
    const thisWeekStart = new Date();
    thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay());
    thisWeekStart.setHours(0, 0, 0, 0);
    
    const lastWeekStart = new Date(thisWeekStart);
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);

    const thisWeekHours = await prisma.learningSession.aggregate({
      where: {
        userId,
        startTime: {
          gte: thisWeekStart,
        },
      },
      _sum: {
        durationMinutes: true,
      },
    });

    const lastWeekHours = await prisma.learningSession.aggregate({
      where: {
        userId,
        startTime: {
          gte: lastWeekStart,
          lt: thisWeekStart,
        },
      },
      _sum: {
        durationMinutes: true,
      },
    });

    const hoursThisWeek = (thisWeekHours._sum.durationMinutes || 0) / 60;
    const hoursLastWeek = (lastWeekHours._sum.durationMinutes || 0) / 60;
    const hoursDifference = hoursThisWeek - hoursLastWeek;

    // Get career path progress
    const totalSkills = await prisma.skill.count({
      where: {
        roadmapStages: {
          some: {
            roadmap: {
              careerPaths: {
                some: {
                  id: user.menteeProfile?.careerPathId || '',
                },
              },
            },
          },
        },
      },
    });

    const completedSkillsCount = user.menteeProfile?.completedSkills.length || 0;
    const careerProgress = totalSkills > 0 ? Math.round((completedSkillsCount / totalSkills) * 100) : 0;

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        image: user.image,
      },
      dashboard: {
        careerPath: {
          name: user.menteeProfile?.careerPath?.name || "Full Stack Developer",
          progress: careerProgress,
        },
        learningHours: {
          total: parseFloat(hoursThisWeek.toFixed(1)),
          difference: parseFloat(hoursDifference.toFixed(1)),
        },
        mentorSessions: {
          count: user.menteeProfile?.mentorSessions.length || 0,
          next: user.menteeProfile?.mentorSessions[0] || null,
        },
        completedSkills: {
          count: completedSkillsCount,
          total: totalSkills,
          recentCount: 2, // Could calculate this from timestamps
        },
        recentActivity: user.activities.map(activity => ({
          id: activity.id,
          title: activity.title,
          description: activity.description,
          type: activity.type,
          createdAt: activity.createdAt,
        })),
        upcomingSessions: user.menteeProfile?.mentorSessions.map(session => ({
          id: session.id,
          title: session.topic,
          mentor: session.mentor.user.name,
          date: session.startTime,
          duration: (new Date(session.endTime).getTime() - new Date(session.startTime).getTime()) / 60000,
        })),
        recommendedResources: recommendedResources.map(resource => ({
          id: resource.id,
          title: resource.title,
          type: resource.type,
          provider: resource.provider,
          image: resource.image,
          duration: resource.duration,
        })),
      }
    });
    
  } catch (error) {
    console.error("Dashboard fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
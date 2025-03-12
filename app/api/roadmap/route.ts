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

    // Get user ID from email as it's not included in the default session
    const userEmail = session.user.email;
    if (!userEmail) {
      return NextResponse.json({ error: "User email not found" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userId = user.id;

    // Get user's career path and associated roadmap
    const userProfile = await prisma.menteeProfile.findUnique({
      where: { userId },
      include: {
        careerPath: {
          include: {
            roadmap: {
              include: {
                stages: {
                  include: {
                    skills: true
                  },
                  orderBy: {
                    order: 'asc'
                  }
                }
              }
            }
          }
        },
        completedSkills: true
      }
    });

    if (!userProfile?.careerPath?.roadmap) {
      return NextResponse.json(
        { error: "No roadmap found for user" },
        { status: 404 }
      );
    }

    // Calculate progress for each stage
    const roadmap = userProfile.careerPath.roadmap;
    interface CompletedSkill {
        id: string;
    }

    const completedSkillIds: string[] = userProfile.completedSkills.map((skill: CompletedSkill) => skill.id);

    interface SkillWithCompletion {
      id: string;
      name: string;
      description: string;
      resources: any; // Assuming resources is stored as any/json
      completed: boolean;
    }

    interface StageWithProgress {
      id: string;
      name: string;
      description: string;
      order: number;
      skills: SkillWithCompletion[];
      progress: number;
      status: 'completed' | 'in-progress' | 'not-started';
    }

    interface RoadmapWithProgress {
      id: string;
      name: string;
      description: string;
      timeToComplete: string;
      stages: StageWithProgress[];
    }

    // Base type definitions
    interface Roadmap {
      id: string;
      name: string;
      description: string;
      timeToComplete: string;
      stages: Stage[];
    }

    interface Stage {
      id: string;
      name: string;
      description: string;
      order: number;
      skills: Skill[];
    }

    interface Skill {
      id: string;
      name: string;
      description: string;
      resources: any;
    }

    const roadmapWithProgress: RoadmapWithProgress = {
      id: roadmap.id,
      name: roadmap.name,
      description: roadmap.description,
      timeToComplete: roadmap.timeToComplete,
      stages: roadmap.stages.map((stage: Stage) => {
        const totalSkills: number = stage.skills.length;
        const completedSkills: number = stage.skills.filter((skill: Skill) => 
          completedSkillIds.includes(skill.id)
        ).length;
        
        const progress: number = totalSkills > 0 ? (completedSkills / totalSkills) * 100 : 0;
        
        return {
          id: stage.id,
          name: stage.name,
          description: stage.description,
          order: stage.order,
          skills: stage.skills.map((skill: Skill) => ({
            id: skill.id,
            name: skill.name,
            description: skill.description,
            resources: skill.resources,
            completed: completedSkillIds.includes(skill.id)
          })),
          progress: Math.round(progress),
          status: progress === 100 ? 'completed' : progress > 0 ? 'in-progress' : 'not-started' as 'completed' | 'in-progress' | 'not-started'
        };
      })
    };
    
    return NextResponse.json(roadmapWithProgress);
    
  } catch (error) {
    console.error("Roadmap fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch roadmap" },
      { status: 500 }
    );
  }
}
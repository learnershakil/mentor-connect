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
    const careerPathId = searchParams.get("careerPathId");
    const skillId = searchParams.get("skillId");
    const type = searchParams.get("type");
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const skip = (page - 1) * pageSize;

    // Build filter conditions
    const where: any = {};

    if (careerPathId) {
      where.careerPaths = {
        some: {
          id: careerPathId
        }
      };
    }

    if (skillId) {
      where.skills = {
        some: {
          id: skillId
        }
      };
    }

    if (type) {
      where.type = type;
    }

    // Get resources
    const resources = await prisma.resource.findMany({
      where,
      include: {
        skills: true,
        careerPaths: {
          select: {
            id: true,
            name: true
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
    const totalResources = await prisma.resource.count({ where });

    return NextResponse.json({
      resources: resources.map(resource => ({
        id: resource.id,
        title: resource.title,
        description: resource.description,
        type: resource.type,
        url: resource.url,
        provider: resource.provider,
        image: resource.image,
        duration: resource.duration,
        difficulty: resource.difficulty,
        rating: resource.rating,
        skills: resource.skills.map(skill => ({
          id: skill.id,
          name: skill.name
        })),
        careerPaths: resource.careerPaths.map(path => ({
          id: path.id,
          name: path.name
        }))
      })),
      pagination: {
        total: totalResources,
        pages: Math.ceil(totalResources / pageSize),
        page,
        pageSize
      }
    });
  } catch (error) {
    console.error("Resources fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const groups = await prisma.conversations.findMany({
      where: {
        type: "group",
      },
      select: {
        id: true,
        name: true,
        bio: true,
        bannerImage: true,
        isPublic: true,
      },
      take: 15,
    });

    return Response.json({
      success: true,
      staus: 200,
      data: groups,
    });
  } catch (error) {
    console.log("Error in getting users: ", error);
    return Response.json({
      success: false,
      staus: 500,
      message: "Internal Server Error",
    });
  }
}

export async function POST(request) {
  try {
    const { userId, conversationId } = await request.json();

    const newGroup = await prisma.conversationMembers.create({
      data: {
        conversationId,
        userId,
      },
      select: {
        conversation: {
          select: {
            id: true,
            bio: true,
            bannerImage: true,
            name: true,
            type: true,
          },
        },
      },
    });

    console.log("group: ", newGroup);

    return Response.json({
      success: true,
      staus: 200,
      data: newGroup,
    });
  } catch (error) {
    console.log("Error in getting users: ", error);
    return Response.json({
      success: false,
      staus: 500,
      message: "Internal Server Error",
    });
  }
}

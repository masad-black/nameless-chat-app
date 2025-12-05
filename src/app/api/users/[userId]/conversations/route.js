import { PrismaClient } from "../../../../../../generated/prisma";

const prisma = new PrismaClient();

// getting the user conversations
export async function GET(request, { params }) {
  try {
    const { userId } = await params;

    console.log("user id", userId);

    const conversations = await prisma.conversations.findMany({
      // 1: get the "direct"/"groups" user conversations conversation
      where: {
        OR: [
          // user created conversations
          { createrId: userId },
          // conversations in which user is memeber direct/group
          {
            members: {
              some: {
                userId,
              },
            },
          },
        ],
      },
      select: {
        // selecting conversations data
        id: true,
        type: true,
        name: true,
        bannerImage: true,
        bio: true,
        isPublic: true,
        createdAt: true,
        // selecting members data
        members: {
          where: {
            userId: {
              not: userId,
            },
          },
          select: {
            id: true,
            role: true,
            // selecting users data
            user: {
              select: {
                id: true,
                username: true,
                bio: true,
                profileImage: true,
              },
            },
          },
        },
      },
    });

    console.log("all conversations: ", conversations);

    // console.log("direct conversation: ", conversations);
    return Response.json({
      success: true,
      staus: 200,
      data: conversations,
    });
  } catch (error) {
    console.log("Error in getting user conversations: ", error);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}

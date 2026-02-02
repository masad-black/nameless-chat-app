import { PrismaClient } from "../../../../generated/prisma";

export async function POST(request) {
  try {
    const { type, content, conversationId, senderId } = await request.json();

    if (!type || !conversationId || !senderId) {
      return Response.json({
        success: false,
        status: 400,
        message: "Data is missing",
      });
    }

    console.log("message data: ", type, content, conversationId, senderId);
    const prisma = new PrismaClient();

    const message = await prisma.messages.create({
      data: {
        content,
        type: type,
        senderId,
        conversationId,
      },
      select: {
        id: true,
        content: true,
        imageUrl: true,
        createdAt: true,
        conversationId: true,
        senderId: true,
        type: true,
      },
    });

    const members = await prisma.conversationMembers.findMany({
      where: {
        conversationId,
      },
      select: {
        userId: true,
      },
    });

    console.log(" message members: ", {
      message,
      members,
    });

    if (!message) {
      return Response.json({
        success: false,
        status: 500,
        message: "Internal Server Error",
      });
    }

    return Response.json({
      success: true,
      status: 200,
      data: {
        message,
        members,
      },
    });
  } catch (error) {
    console.log("Error in creting new message: ", error);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}

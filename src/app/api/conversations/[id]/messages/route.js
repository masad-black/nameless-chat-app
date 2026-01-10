import { PrismaClient } from "../../../../../../generated/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return Response.json({
        success: true,
        status: 400,
        message: "Id is required",
      });
    }

    const prisma = new PrismaClient();

    const messages = await prisma.messages.findMany({
      where: {
        conversationId: id,
      },
      select: {
        id: true,
        content: true,
        type: true,
        imageUrl: true,
        createdAt: true,
        senderId: true,
      },
    });

    return Response.json({
      success: true,
      status: 200,
      messages,
    });
  } catch (error) {
    console.log("Error in getting conversation messages: ", error);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}

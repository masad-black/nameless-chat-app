import { PrismaClient } from "../../../../generated/prisma";

//
export async function GET(request) {
  return Response.json({
    success: true,
    message: "New conversation created!!",
  });
}

// creating new conversations
export async function POST(request) {
  try {
    const { conversationType, createrId, convMemberId, name, isPublic } =
      await request.json();

    if (!conversationType || !createrId) {
      return Response.json({
        success: false,
        status: 400,
        message: "Missing Fields",
      });
    }

    // creating prisma connection
    const prisma = new PrismaClient();

    // checking if the creater exists
    const creater = await prisma.users.findFirst({
      where: {
        id: createrId,
      },
    });

    if (creater === null) {
      return Response.json({
        success: false,
        status: 400,
        message: "CreaterId is Invalid",
      });
    }

    if (conversationType.toLowerCase() === "direct") {
      // 1: Creating "Direct" conversation
      const singleConversation = await prisma.conversations.create({
        data: {
          createrId: creater.id,
          isPublic,
          type: "direct",
        },
      });
      // 2: Adding memebrs to this conversation
      const members = await prisma.conversationMembers.createMany({
        data: [
          {
            conversationId: singleConversation.id,
            userId: creater.id, // creator of this conversation
            role: "admin",
          },
          {
            conversationId: singleConversation.id,
            userId: convMemberId, // the second memeber of "Direct" conversation
            role: "admin",
          },
        ],
      });

      return Response.json({
        success: true,
        status: 200,
        data: {
          conversation: { ...singleConversation, members },
        },
      });
    } else if (conversationType.toLowerCase() === "group") {
      // 1: Creating "Group" conversation
      const groupConversation = await prisma.conversations.create({
        data: {
          createrId: creater.id,
          isPublic,
          type: "group",
          name: name || "Untitled Group",
          bio: "Hey there.",
        },
      });

      return Response.json({
        success: true,
        status: 200,
        data: {
          conversation: { ...groupConversation },
        },
      });
    }
  } catch (error) {
    console.log("Error in creting new conversation: ", error);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}

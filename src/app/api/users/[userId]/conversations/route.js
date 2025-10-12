import { PrismaClient } from "../../../../../../generated/prisma";

const prisma = new PrismaClient();

// getting the user conversations
export async function GET(request, { params }) {
  try {
    const { userId } = await params;

    // getting all the user created conversations (direct or group)
    const conversations = await prisma.conversations.findMany({
      where: {
        createrId: userId,
      },
    });

    // checking if the uses is member of any gorup conversation
    const conversationsMember = await prisma.conversationMembers.findMany({
      where: {
        userId: userId,
      },
    });

    // then also getting that conversations, in which the user id the member
    let relatedConversations;
    for (let member of conversationsMember) {
      relatedConversations = await prisma.conversations.findMany({
        where: {
          createrId: member.userId,
        },
      });
    }

    conversations.push(relatedConversations);
    // console.log("conversations: ", conversations);

    return Response.json({
      success: true,
      status: 200,
      data: {
        conversations,
      },
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

import { headers } from "next/headers";

import { PrismaClient } from "../../../../generated/prisma";
import uploadImageToCloude from "@/libs/cloudinary";

export async function POST(request) {
  try {
    // const formData = await request.formData();

    const headerList = await headers();

    if (headerList.get("content-type").startsWith("multipart/form-data")) {
      var formData = await request.formData();

      var type = formData.get("type");
      var conversationId = formData.get("conversationId");
      var content = formData.get("content");
      var senderId = formData.get("senderId");
      var file = formData.get("file");
    } else {
      var { type, content, conversationId, senderId, formData } = await request.json();
    }

    if (!type || !conversationId || !senderId) {
      return Response.json({
        success: false,
        status: 400,
        message: "Data is missing",
      });
    }

    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      var url = await uploadImageToCloude(buffer, "chats");
    }

    // console.log("message data: ", type, content, conversationId, senderId);
    const prisma = new PrismaClient();

    const message = await prisma.messages.create({
      data: {
        content,
        type: type,
        senderId,
        conversationId,
        imageUrl: url || null,
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

import { headers } from "next/headers";
import { PrismaClient } from "../../../../generated/prisma";

import uploadImageToCloude from "@/libs/cloudinary";

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
    const headerList = await headers();

    if (headerList.get("content-type").startsWith("multipart/form-data")) {
      var formData = await request.formData();
      console.log("formdata: ", formData);

      var createrId = formData.get("createrId");
      var groupName = formData.get("groupName");
      var conversationType = formData.get("conversationType");
      var isPublic = formData.get("isPublic");
      var groupBio = formData.get("groupBio");
      var groupBanner = formData.get("groupBanner");
    } else {
      var {
        conversationType,
        createrId,
        convMemberId,
        groupName,
        groupBio,
        isPublic,
        groupBanner,
      } = await request.json();
    }

    console.log("public: ", isPublic);

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
      const singleConversation = await prisma.conversations.create({
        // 1: Creating "Direct" conversation
        data: {
          createrId: creater.id,
          isPublic: false,
          type: "direct",
          // 2: Adding members to this conversation
          members: {
            createMany: {
              data: [
                {
                  userId: creater.id, // creator of this conversation
                  role: "member",
                },
                {
                  userId: convMemberId, // the second memeber of "Direct" conversation
                  role: "member",
                },
              ],
            },
          },
        },
        // 3: get the conversation
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
                not: createrId,
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

      return Response.json({
        success: true,
        status: 200,
        data: singleConversation,
      });
    } else if (conversationType.toLowerCase() === "group") {
      // converting file to Buffer for storing it temporary
      if (groupBanner instanceof Blob || groupBanner instanceof File) {
        console.log("---True---");
      } else {
        console.log("---Not---");
      }

      const arrayBuffer = await groupBanner.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // uplaoding image to cloude
      const imageUrl = await uploadImageToCloude(buffer, "group");

      // 1: Creating "Group" conversation
      const groupConversation = await prisma.conversations.create({
        data: {
          createrId: creater.id,
          isPublic: isPublic.toLowerCase() === "true" ? true : false,
          type: "group",
          name: groupName || "Untitled Group",
          bio: groupBio || "Hey there.",
          bannerImage: imageUrl,
        },
        select: {
          id: true,
          name: true,
          bio: true,
          bannerImage: true,
          isPublic: true,
        },
      });

      return Response.json({
        success: true,
        status: 200,
        data: groupConversation,
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

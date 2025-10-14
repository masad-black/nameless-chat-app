import { PrismaClient } from "../../../../../generated/prisma";
import uploadImageToCloude from "@/libs/cloudinary.js";

const prisma = new PrismaClient();

export async function PATCH(request, { params }) {
  try {
    const { groupId } = await params;
    const formData = await request.formData();

    console.log("group ID", groupId);

    const newGroupName = formData.get("newGroupName");
    const bio = formData.get("bio");
    const bannerImage = formData.get("bannerImage");

    // converting file to Buffer for storing it temporary
    const arrayBuffer = await bannerImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // uplaoding image to cloude
    const imageUrl = await uploadImageToCloude(buffer, "group");

    const updatedGroup = await prisma.conversations.update({
      where: {
        id: groupId,
      },
      data: {
        name: newGroupName,
        bio,
        bannerImage: imageUrl,
      },
    });

    return Response.json({
      success: true,
      staus: 200,
      data: updatedGroup,
    });
  } catch (error) {
    console.log("Error in getting groups: ", error);
    return Response.json({
      success: false,
      staus: 500,
      message: "Internal Server Error",
    });
  }
}

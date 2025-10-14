import { PrismaClient } from "../../../../../generated/prisma";
import uploadImageToCloude from "@/libs/cloudinary.js";

const prisma = new PrismaClient();

export async function PATCH(request, { params }) {
  try {
    const { userId } = await params;
    const formData = await request.formData();

    console.log("user ID", userId);

    const newUserName = formData.get("username");
    const bio = formData.get("bio");
    const profileImage = formData.get("profileImage");

    // converting file to Buffer for storing it temporary
    const arrayBuffer = await profileImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // uplaoding image to cloude
    const imageUrl = await uploadImageToCloude(buffer, "user");

    const updatedUser = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        profileImage: imageUrl,
        username: newUserName,
        bio,
      },
    });

    return Response.json({
      success: true,
      staus: 200,
      data: updatedUser,
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

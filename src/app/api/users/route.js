import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      take: 15,
      select: {
        id: true,
        username: true,
        profileImage: true,
        bio: true,
      },
    });

    return Response.json({
      success: true,
      staus: 200,
      data: users,
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

export async function PATCH(request) {
  try {
    const formData = await request.formData();
    const username = formData.get("username");
    const bio = formData.get("bio");
    const profileImage = formData.get("profileImage");

    // console.log("upadted user: ", username, bio, profileImage);
    console.log("headers: ", request.headers);

    return Response.json({
      success: true,
      staus: 200,
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

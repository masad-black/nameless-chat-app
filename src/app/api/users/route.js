import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        username: true,
        profileImage: true,
        bio: true,
      },
    });

    // return Response.json({
    //   success: false,
    //   staus: 500,
    //   message: "Internal Server Error",
    // });
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

import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const groups = await prisma.conversations.findMany({
      where: {
        type: "group",
      },
      select: {
        id: true,
        name: true,
        bio: true,
        bannerImage: true,
        isPublic: true,
      },
      take: 15,
    });

    return Response.json({
      success: true,
      staus: 200,
      data: groups,
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

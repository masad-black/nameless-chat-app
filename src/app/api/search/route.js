import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const queryParams = request.nextUrl.searchParams;

    const search = queryParams.get("search");
    const type = queryParams.get("type");
    const limit = queryParams.get("limit");

    console.log(search, type, limit);

    if (!search || !type || !limit) {
      return Response.json({
        success: false,
        staus: 400,
        message: "Search Params Required",
      });
    }

    // searching for users
    if (type === "users") {
      const users = await prisma.users.findMany({
        where: {
          username: {
            contains: search,
            mode: "insensitive",
          },
        },
        take: 15,
      });
      console.log("users: ", users);
    } else if (type === "groups") {
      // searching for groups
    }
    return Response.json("Hello world from NextJs backend!!!");
  } catch (error) {
    console.log("Error in search: ", error);
    return Response.json({
      success: false,
      staus: 500,
      message: "Internal Server Error",
    });
  }
}

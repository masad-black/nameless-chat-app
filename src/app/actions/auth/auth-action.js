"use server";

import bcrypt from "bcryptjs";
import { PrismaClient } from "../../../../generated/prisma";
import { RegistrationSchema } from "@/libs/zod.js";

async function registerNewUser(formData) {
  console.log("data:", formData);

  const validateFormFields = RegistrationSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // console.log(validateFormFields);

  // if form filed fails send the error in client-side.
  if (!validateFormFields.success) {
    return {
      errors: validateFormFields.error.flatten().fieldErrors,
    };
  }

  // prisma connection
  const prisma = new PrismaClient();

  try {
    const hashPassword = await bcrypt.hash(
      validateFormFields.data.password,
      10
    );

    const newUser = await prisma.users.create({
      data: {
        username: validateFormFields.data.username,
        email: validateFormFields.data.email,
        password: hashPassword,
        bio: "Hey there.",
      },
    });

    // console.log("new user: ", newUser);

    return {
      response: true,
    };
  } catch (error) {
    console.log("__Error in registering new user__", error);
    // return {
    //   errors: error.name,
    // };
  } finally {
    prisma.$disconnect();
  }
}

export { registerNewUser };

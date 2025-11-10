import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "../../../../../generated/prisma";

/*
  Note:

  1: signIn(client-side) fn: moves the user to the login page.
  2: next-auth: doesn't handle new user registration. We need to handle it manually
  3: jwt fn: is trigger 2 times. One time for creatng and second time for accessing
  4: flow of callbacks: singIn(callback) -> jwt -> session -> redirect.
 */

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // name: "",
      //   --- credentails is used to be displayed on client-side. ---
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password...",
        },
      },
      // cutome login for credentails
      async authorize(credentails, req) {
        // db connection
        const prisma = new PrismaClient();

        try {
          const user = await prisma.users.findFirst({
            where: {
              email: credentails.email,
            },
          });

          console.log("cp user: ", user);

          // user doesn't exist in DB.
          if (!user) return null;

          const isPasswordCorrect = await bcrypt.compare(
            credentails.password,
            user.password
          );

          // password not correct
          if (!isPasswordCorrect) return null;

          return user; // user
        } catch (error) {
          console.log("__Error in login user__", error);
          return null;
        } finally {
          prisma.$disconnect();
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("--- trigger jwt token ---");

      // initial jwt token cretin
      if (account && user) {
        console.log("--- Initial jwt creatin ---");

        (token.username = user.username),
          (token.id = user.id),
          (token.email = user.email),
          (token.profileImage = user.profileImage);
        token.isOnline = user.isOnline;
      }

      return token;
    },
    async session({ session, user, token }) {
      console.log("-- trigger session --");
      session.user = token;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("--- Trigger rediret ---");
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };

-- CreateEnum
CREATE TYPE "public"."ConversationTypes" AS ENUM ('direct', 'group');

-- CreateEnum
CREATE TYPE "public"."ConversationRoles" AS ENUM ('member', 'admin');

-- CreateEnum
CREATE TYPE "public"."MessageTypes" AS ENUM ('text', 'image');

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passowrd" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "profileImage" TEXT,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "public"."Conversations" (
    "id" TEXT NOT NULL,
    "cretedBy" TEXT NOT NULL,
    "type" "public"."ConversationTypes" NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "bannerImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "public"."ConversationMembers" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "public"."ConversationRoles" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "public"."Messages" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "type" "public"."MessageTypes" NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "public"."Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Conversations_id_key" ON "public"."Conversations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationMembers_id_key" ON "public"."ConversationMembers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Messages_id_key" ON "public"."Messages"("id");

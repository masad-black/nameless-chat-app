/*
  Warnings:

  - You are about to drop the column `passowrd` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[conversationId,userId]` on the table `ConversationMembers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[conversationId,userId]` on the table `GroupRequests` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "public"."ConversationMembers" ALTER COLUMN "role" SET DEFAULT 'member',
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "ConversationMembers_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."ConversationMembers_id_key";

-- AlterTable
ALTER TABLE "public"."Conversations" ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "createrId" DROP NOT NULL,
ALTER COLUMN "isPublic" SET DEFAULT false,
ADD CONSTRAINT "Conversations_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."Conversations_id_key";

-- AlterTable
ALTER TABLE "public"."GroupRequests" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "public"."RequestStatus" NOT NULL DEFAULT 'pending',
ADD CONSTRAINT "GroupRequests_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."GroupRequests_id_key";

-- AlterTable
ALTER TABLE "public"."Messages" ALTER COLUMN "type" SET DEFAULT 'text',
ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Messages_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."Messages_id_key";

-- AlterTable
ALTER TABLE "public"."Users" DROP COLUMN "passowrd",
ADD COLUMN     "password" TEXT NOT NULL DEFAULT '12345678',
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."Users_id_key";

-- CreateIndex
CREATE INDEX "ConversationMembers_userId_idx" ON "public"."ConversationMembers"("userId");

-- CreateIndex
CREATE INDEX "ConversationMembers_conversationId_idx" ON "public"."ConversationMembers"("conversationId");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationMembers_conversationId_userId_key" ON "public"."ConversationMembers"("conversationId", "userId");

-- CreateIndex
CREATE INDEX "Conversations_createrId_idx" ON "public"."Conversations"("createrId");

-- CreateIndex
CREATE INDEX "Conversations_type_idx" ON "public"."Conversations"("type");

-- CreateIndex
CREATE INDEX "Conversations_updatedAt_idx" ON "public"."Conversations"("updatedAt");

-- CreateIndex
CREATE INDEX "GroupRequests_userId_idx" ON "public"."GroupRequests"("userId");

-- CreateIndex
CREATE INDEX "GroupRequests_conversationId_idx" ON "public"."GroupRequests"("conversationId");

-- CreateIndex
CREATE INDEX "GroupRequests_status_idx" ON "public"."GroupRequests"("status");

-- CreateIndex
CREATE UNIQUE INDEX "GroupRequests_conversationId_userId_key" ON "public"."GroupRequests"("conversationId", "userId");

-- CreateIndex
CREATE INDEX "Messages_conversationId_createdAt_idx" ON "public"."Messages"("conversationId", "createdAt");

-- CreateIndex
CREATE INDEX "Messages_senderId_idx" ON "public"."Messages"("senderId");

-- CreateIndex
CREATE INDEX "Users_email_idx" ON "public"."Users"("email");

-- CreateIndex
CREATE INDEX "Users_username_idx" ON "public"."Users"("username");

-- AddForeignKey
ALTER TABLE "public"."Conversations" ADD CONSTRAINT "Conversations_createrId_fkey" FOREIGN KEY ("createrId") REFERENCES "public"."Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConversationMembers" ADD CONSTRAINT "ConversationMembers_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ConversationMembers" ADD CONSTRAINT "ConversationMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Messages" ADD CONSTRAINT "Messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Messages" ADD CONSTRAINT "Messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GroupRequests" ADD CONSTRAINT "GroupRequests_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GroupRequests" ADD CONSTRAINT "GroupRequests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

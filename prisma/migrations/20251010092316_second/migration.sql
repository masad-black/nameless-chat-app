/*
  Warnings:

  - You are about to drop the column `cretedBy` on the `Conversations` table. All the data in the column will be lost.
  - You are about to drop the column `isOnline` on the `Users` table. All the data in the column will be lost.
  - Added the required column `createrId` to the `Conversations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPublic` to the `Conversations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Conversations" DROP COLUMN "cretedBy",
ADD COLUMN     "createrId" TEXT NOT NULL,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Users" DROP COLUMN "isOnline",
ALTER COLUMN "bio" SET DEFAULT 'Hey there.';

-- CreateTable
CREATE TABLE "public"."GroupRequests" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupRequests_id_key" ON "public"."GroupRequests"("id");

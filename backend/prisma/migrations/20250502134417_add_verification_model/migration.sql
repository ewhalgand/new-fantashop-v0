/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `verification_tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "verification_tokens_identifier_token_key";

-- AlterTable
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_key" ON "verification_tokens"("identifier");

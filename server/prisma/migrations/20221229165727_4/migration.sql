/*
  Warnings:

  - You are about to alter the column `password_hash` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Char(256)` to `Char(97)`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password_hash" SET DATA TYPE CHAR(97);

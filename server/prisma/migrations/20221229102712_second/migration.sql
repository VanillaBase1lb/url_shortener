/*
  Warnings:

  - The primary key for the `URL` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `short` on the `URL` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(8)`.
  - You are about to alter the column `password_hash` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(256)`.

*/
-- AlterTable
ALTER TABLE "URL" DROP CONSTRAINT "URL_pkey",
ALTER COLUMN "short" SET DATA TYPE CHAR(8),
ADD CONSTRAINT "URL_pkey" PRIMARY KEY ("short");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password_hash" SET DATA TYPE CHAR(256);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password_hash" CHAR(97) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "URL" (
    "url" TEXT NOT NULL,
    "short" CHAR(8) NOT NULL,
    "userEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("short")
);

-- AddForeignKey
ALTER TABLE "URL" ADD CONSTRAINT "URL_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

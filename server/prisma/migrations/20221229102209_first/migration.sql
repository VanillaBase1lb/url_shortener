-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "password_salt" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "URL" (
    "url" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "userUsername" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("short")
);

-- AddForeignKey
ALTER TABLE "URL" ADD CONSTRAINT "URL_userUsername_fkey" FOREIGN KEY ("userUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

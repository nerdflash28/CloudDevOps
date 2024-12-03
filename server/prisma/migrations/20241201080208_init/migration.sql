-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'default',

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

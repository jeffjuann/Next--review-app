-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

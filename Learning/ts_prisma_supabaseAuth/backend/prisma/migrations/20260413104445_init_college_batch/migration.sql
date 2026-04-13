-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'TPO';

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "batchId" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Batch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "inviteCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Batch_inviteCode_key" ON "Batch"("inviteCode");

-- CreateIndex
CREATE INDEX "Batch_collegeId_idx" ON "Batch"("collegeId");

-- CreateIndex
CREATE INDEX "Profile_collegeId_idx" ON "Profile"("collegeId");

-- CreateIndex
CREATE INDEX "Profile_batchId_idx" ON "Profile"("batchId");

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

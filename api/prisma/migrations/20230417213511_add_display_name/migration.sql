/*
  Warnings:

  - A unique constraint covering the columns `[displayName]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `displayName` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_displayName_key` ON `User`(`displayName`);

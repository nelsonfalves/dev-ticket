/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `ticketStatus` on the `ReservationHistory` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `ReservationHistory` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Spot` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `ReservationHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Spot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ReservationHistory` DROP COLUMN `ticketStatus`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `status` ENUM('reserved', 'canceled') NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Spot` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Ticket` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

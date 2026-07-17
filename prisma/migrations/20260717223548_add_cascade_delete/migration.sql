/*
  Warnings:

  - You are about to alter the column `weight` on the `exercises` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "exercises" ALTER COLUMN "weight" SET DATA TYPE INTEGER;

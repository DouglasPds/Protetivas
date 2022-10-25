/*
  Warnings:

  - Added the required column `documento_ocorrencia` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ocorrencia` ADD COLUMN `documento_ocorrencia` LONGBLOB NOT NULL;

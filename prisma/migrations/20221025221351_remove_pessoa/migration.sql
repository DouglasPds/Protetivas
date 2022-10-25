/*
  Warnings:

  - The primary key for the `Ocorrencia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_pessoa` on the `Ocorrencia` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_agressor` to the `Ocorrencia` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Ocorrencia` DROP FOREIGN KEY `Ocorrencia_id_pessoa_fkey`;

-- AlterTable
ALTER TABLE `Ocorrencia` DROP PRIMARY KEY,
    DROP COLUMN `id_pessoa`,
    ADD COLUMN `id_user` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome_agressor` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `cpf_vitima` VARCHAR(191) NOT NULL,
    MODIFY `cpf_agressor` VARCHAR(191) NOT NULL,
    MODIFY `documento_ocorrencia` LONGBLOB NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` MODIFY `cpf` VARCHAR(191) NULL,
    MODIFY `telefone` VARCHAR(191) NULL,
    MODIFY `cep` VARCHAR(191) NULL,
    MODIFY `cidade` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Ocorrencia` ADD CONSTRAINT `Ocorrencia_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

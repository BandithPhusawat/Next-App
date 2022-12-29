-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `fname` VARCHAR(191) NOT NULL,
    `Lname` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL DEFAULT 'userprofile',
    `create_at` DATETIME(3) NOT NULL,
    `update_at` DATETIME(3) NOT NULL,
    `status` ENUM('ACTIVE', 'NONACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `system` ENUM('USER', 'ADMIN', 'SUPER_USER') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `detail` VARCHAR(255) NOT NULL,
    `weight` DECIMAL(20, 2) NULL,
    `create_at` DATETIME(3) NOT NULL,
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `detail` VARCHAR(255) NOT NULL,
    `status` ENUM('ACTIVE', 'NONACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `create_at` DATETIME(3) NOT NULL,
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

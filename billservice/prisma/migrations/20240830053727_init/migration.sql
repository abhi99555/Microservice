-- CreateTable
CREATE TABLE `Billinfo` (
    `billid` INTEGER NOT NULL AUTO_INCREMENT,
    `orderdetails` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,

    PRIMARY KEY (`billid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

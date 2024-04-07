/*
  Warnings:

  - Added the required column `tokenIv` to the `EncryptedUserApiToken` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EncryptedUserApiToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "encryptedToken" TEXT NOT NULL,
    "tokenIv" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "EncryptedUserApiToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EncryptedUserApiToken" ("createdAt", "encryptedToken", "id", "name", "updatedAt", "userId") SELECT "createdAt", "encryptedToken", "id", "name", "updatedAt", "userId" FROM "EncryptedUserApiToken";
DROP TABLE "EncryptedUserApiToken";
ALTER TABLE "new_EncryptedUserApiToken" RENAME TO "EncryptedUserApiToken";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
/*
  Warnings:

  - Added the required column `tokenSalt` to the `UserApiToken` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserApiToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "tokenSalt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UserApiToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserApiToken" ("createdAt", "id", "name", "token", "updatedAt", "userId") SELECT "createdAt", "id", "name", "token", "updatedAt", "userId" FROM "UserApiToken";
DROP TABLE "UserApiToken";
ALTER TABLE "new_UserApiToken" RENAME TO "UserApiToken";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

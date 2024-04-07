/*
  Warnings:

  - Added the required column `sourceId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceSlug` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sourceId" TEXT NOT NULL,
    "sourceSlug" TEXT NOT NULL,
    "name" TEXT
);
INSERT INTO "new_User" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_sourceId_key" ON "User"("sourceId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

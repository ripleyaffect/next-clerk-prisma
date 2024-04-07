'use server'

import {
  updateUser as dbUpdateUser,
  createUserApiToken,
  deleteUserApiToken as dbDeleteUserApiToken,
  getUserApiToken,
} from '~/db';
import { obfuscateString } from '~/lib/utils';
import { User } from '@prisma/client';

export const updateUser = async (userId: string, userData: Partial<User>): Promise<User> => {
  // Remove fields that can't be updated
  // TypeScript can't enforce this, so we need to do it manually
  if (userData.id) delete userData.id;
  if (userData.createdAt) delete userData.createdAt;
  if (userData.updatedAt) delete userData.updatedAt;

  return dbUpdateUser(userId, userData);
}

// Create a new user API token.
// Old tokens are deleted and re-created to ensure consistent encryption
export const upsertUserApiToken = async (
  userId: string,
  name: string,
  token: string,
): Promise<string> => {
  const existingToken = await getUserApiToken(userId, name);

  if (existingToken) {
    await deleteUserApiToken(userId, name);
  }

  const newToken = await createUserApiToken({
    userId,
    name,
    token,
  });

  return obfuscateString(newToken.token);
}

export const deleteUserApiToken = async (userId: string, name: string): Promise<void> => {
  await dbDeleteUserApiToken(userId, name);
};

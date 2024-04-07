'use server'

import { PrismaClient, User, EncryptedUserApiToken } from '@prisma/client';
import * as encryption from '~/lib/encryption';

import { DbCreate, UserApiToken } from '~/types';

const TOKEN_ENCRYPTION_KEY = process.env.TOKEN_ENCRYPTION_KEY!;

const dbClient = new PrismaClient()

// Users

export async function createUser(userData: DbCreate<User>, userId?: string): Promise<User> {
  // Allow specifying a user ID for upsert
  const data = userId
    ? { ...userData, id: userId }
    : userData;

  // @ts-ignore
  return dbClient.user.create({ data })
}

export async function getUsers(): Promise<User[]> {
  return dbClient.user.findMany();
}

export async function getUserById(userId: string): Promise<User | null> {
  // @ts-ignore
  return dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function updateUser(userId: string, userData: Partial<DbCreate<User>>): Promise<User> {
  // @ts-ignore
  return dbClient.user.update({
    where: {
      id: userId,
    },
    data: userData,
  });
}

// Api Tokens

export async function createUserApiToken(
  userApiTokenData: DbCreate<UserApiToken>
): Promise<UserApiToken> {

  const encryptedData = encryption.encrypt(
    userApiTokenData.token,
    TOKEN_ENCRYPTION_KEY,
  );

  const { token: _, ...userApiTokenDataWithoutToken } = userApiTokenData;
  const data: DbCreate<EncryptedUserApiToken> = {
    ...userApiTokenDataWithoutToken,
    encryptedToken: encryptedData.encryptedValue,
    tokenIv: encryptedData.iv,
  }

  // @ts-ignore
  const userApiToken = await dbClient.encryptedUserApiToken.create({ data });

  // Return the UserApiToken without the encrypted data
  return {
    ...userApiTokenData,
    id: userApiToken.id,
    createdAt: userApiToken.createdAt,
    updatedAt: userApiToken.updatedAt,
  };
}

export async function getUserApiTokens(userId: string): Promise<UserApiToken[]> {
  // @ts-ignore
  const encryptedTokens = await dbClient.encryptedUserApiToken.findMany({
    where: {
      userId,
    },
  });

  return encryptedTokens.map(token => {
    // Pull out the encrypted data
    const {
      encryptedToken,
      tokenIv,
      ...userApiTokenData
    } = token;

    // Return the UserApiToken with the decrypted token
    return {
      ...userApiTokenData,
      token: encryption.decrypt(encryptedToken, tokenIv, TOKEN_ENCRYPTION_KEY),
    };
  });
}

export async function getUserApiToken(userId: string, name: string): Promise<UserApiToken | null> {
  // @ts-ignore
  const dbEncryptedToken = await dbClient.encryptedUserApiToken.findFirst({
    where: {
      userId,
      name,
    },
  });

  if (!dbEncryptedToken) {
    return null;
  }

  // Pull out the encrypted data
  const {
    encryptedToken,
    tokenIv,
    ...userApiTokenData
  } = dbEncryptedToken;

  // Return the UserApiToken with the decrypted token
  return {
    ...userApiTokenData,
    token: encryption.decrypt(encryptedToken, tokenIv, TOKEN_ENCRYPTION_KEY),
  };
}

export async function deleteUserApiToken(userId: string, name: string) {
  // @ts-ignore
  return dbClient.encryptedUserApiToken.deleteMany({
    where: {
      userId,
      name,
    },
  });
}

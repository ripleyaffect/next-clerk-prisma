import { EncryptedUserApiToken } from '@prisma/client';

export type DbCreate<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
export type UserApiToken = Omit<EncryptedUserApiToken, 'encryptedToken' | 'tokenIv'> & {
  token: string;
};

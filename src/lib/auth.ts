import { auth, clerkClient } from '@clerk/nextjs';

import { createUser, getUserById } from '~/db';

export const currentUser = async (upsert: boolean = false) => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  return upsert
    ? upsertUser(userId)
    : getUserById(userId);
}

export const upsertUser = async (userId: string) => {
  const user = await getUserById(userId);

  if (user) {
    return user;
  }

  // Fetch the user from Clerk
  const clerkUser = await clerkClient.users.getUser(userId);

  if (!clerkUser) {
    throw new Error('User not found');
  }

  const name = getUserName(clerkUser.firstName, clerkUser.lastName);

  // Create the user in the database
  return createUser({ name }, userId);
}

const getUserName = (firstName: string | null, lastName: string | null) => {
  return `${firstName ?? ''} ${lastName ?? ''}`.trim();
}

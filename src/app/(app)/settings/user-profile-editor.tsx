'use client'

import { FC, FormEventHandler, useState } from 'react';
import { User } from '@prisma/client';
import { Input } from '~/components/ui/input';
import { updateUser } from '~/actions';
import { Button } from '~/components/ui/button';

export const UserProfileEditor: FC<{
  defaultUser: User;
}> = ({
  defaultUser,
}) => {
  const [userProfile, setUserProfile] = useState<{
    name: string;
  }>({
    name: defaultUser.name || '',
  });
  const [isSaving, setIsSaving] = useState(false);

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    setIsSaving(true);

    // Save the user profile
    await updateUser(defaultUser.id, userProfile);

    setIsSaving(false);
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit}>
        <label
          className=""
          htmlFor="name"
        >
          Name
        </label>
        <Input
          id="name"
          className="w-[400px] mt-1"
          disabled={isSaving}
          value={userProfile.name}
          onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
        />
        <Button
          type="submit"
          className="mt-4"
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </form>
    </div>
  )
}

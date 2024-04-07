import { AppMain } from '../app-main';
import { currentUser } from '~/lib/auth';
import { SettingsSidebar } from '~/app/(app)/settings/settings-sidebar';
import { SettingsMain } from '~/app/(app)/settings/settings-main';
import { UserProfileEditor } from '~/app/(app)/settings/user-profile-editor';

export default async function SettingsPage()  {
  const user = await currentUser();

  if (!user) {
    return <AppMain title="Settings" />
  }

  return (
    <SettingsMain
      title="Profile"
      subtitle="Manage your profile settings"
    >
      <UserProfileEditor defaultUser={user} />
    </SettingsMain>
  )
}

import { AppMain } from '../app-main';
import { currentUser } from '~/lib/auth';
import { SettingsSidebar } from '~/app/(app)/settings/settings-sidebar';

const SETTINGS_LINKS = [
  {
    href: "/settings",
    label: "Profile",
  },
  {
    href: "/settings/tokens",
    label: "Tokens",
  }
]

export default async function SettingsPage({
  children,
}: {
  children?: React.ReactNode
})  {
  const user = await currentUser();

  return (
    <AppMain
      title="Settings"
      subtitle="Manage your account settings"
      user={user}
      borderHeader
    >
      <div className="flex w-full h-full">
        <SettingsSidebar links={SETTINGS_LINKS} />
        {children}
      </div>
    </AppMain>
  )
}

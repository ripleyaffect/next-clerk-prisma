import { AppMain } from '../app-main';
import { currentUser } from '~/lib/auth';

export default async function DashboardPage()  {
  // This will create the user if it doesn't exist
  // Most routes don't need to do this, but /dashboard is the route that's hit post-signup
  const user = await currentUser(true);

  return (
    <AppMain title="Dashboard" user={user} />
  )
}

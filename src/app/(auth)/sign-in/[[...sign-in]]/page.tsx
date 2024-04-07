import { auth, SignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Page() {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return <SignIn afterSignInUrl="/dashboard" />;
}

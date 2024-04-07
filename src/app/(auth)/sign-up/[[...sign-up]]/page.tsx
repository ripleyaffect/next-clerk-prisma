import { auth, SignUp } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function SignUpPage() {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return <SignUp />;
}

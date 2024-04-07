import { SplashMain } from '~/app/(splash)/splash-main';

export default function Home() {
  return (
    <SplashMain
      title="Ripley Starter"
    >
      <div className="flex justify-center">
        Edit <code className="px-1 bg-secondary mx-1">
          src/app/(splash)/page.tsx
        </code> to change this content
      </div>
    </SplashMain>
  )
}

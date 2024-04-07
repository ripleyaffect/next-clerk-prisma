import { FC, PropsWithChildren } from 'react';

export const SplashMain: FC<PropsWithChildren<{
  title: string
}>> = ({
  title,
  children,
}) => {
  return (
    <main className="container">
      <h1 className="text-4xl text-center my-10 font-semibold">
        {title}
      </h1>
      {children}
    </main>
  )
}

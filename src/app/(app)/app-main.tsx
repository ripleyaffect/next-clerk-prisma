import { FC, PropsWithChildren } from 'react';
import type { User } from '@prisma/client';

export const AppMain: FC<PropsWithChildren<{
  title: string;
  subtitle?: string;
  user?: User | null;
  borderHeader?: boolean;
}>> = ({
  title,
  subtitle,
  borderHeader = false,
  children = <AppMainNoContent />,
}) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className={`flex flex-col ${borderHeader ? 'border-b ' : ''}md:ml-4`}>
        <h1 className="text-lg md:text-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-2 mb-6">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </main>
  )
}

export const AppMainNoContent = () => {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center text-muted-foreground">
        No content
      </div>
    </div>
  )
}

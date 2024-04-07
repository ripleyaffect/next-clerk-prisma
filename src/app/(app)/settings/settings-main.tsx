import { FC, PropsWithChildren } from 'react';
import type { User } from '@prisma/client';

export const SettingsMain: FC<PropsWithChildren<{
  title: string;
  subtitle?: string;
  user?: User | null;
  borderHeader?: boolean;
}>> = ({
  title,
  subtitle,
  borderHeader = false,
  children = <SettingsMainNoContent />,
}) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className={`flex flex-col pb-6 ${borderHeader ? 'border-b ' : ''}`}>
        <h1 className="text-lg md:text-xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-2 text-sm">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}

export const SettingsMainNoContent = () => {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center text-muted-foreground">
        No content
      </div>
    </div>
  )
}

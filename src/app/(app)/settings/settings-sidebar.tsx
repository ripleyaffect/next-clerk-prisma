'use client'

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SettingsLink = {
  href: string;
  label: string;
}

export const SettingsSidebar: FC<{
  links: SettingsLink[]
}> = ({
  links,
}) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col w-[250px] font-medium mr-6">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center w-full py-2 px-4 my-1 rounded-lg ${
            link.href === pathname 
              ? 'text-primary bg-muted' 
              : 'text-muted-foreground hover:text-primary hover:underline'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

'use client'

import { FC } from 'react';
import Link from 'next/link';

import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2, Settings,
  ShoppingCart, Sparkles,
  Users,
} from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { usePathname } from 'next/navigation';

export type AppLink = {
  href: string
  label: string
  icon: React.ReactNode
}

export const AppSidebar: FC<{
  AppIcon?: React.ReactNode
  appName: string,
  links: AppLink[],
}> = ({
  AppIcon = <Sparkles className="h-6 w-6"/>,
  appName = 'Ripley',
  links,
}) => {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-md">
            {AppIcon}
            <span>{appName}</span>
          </Link>
          {/* TODO: Move close to user after notifications system is in */}
          {/*<Button variant="outline" size="icon" className="ml-auto h-8 w-8">*/}
          {/*  <Bell className="h-4 w-4"/>*/}
          {/*  <span className="sr-only">Toggle notifications</span>*/}
          {/*</Button>*/}
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={
                  // TODO Replace with isActive in own component
                  pathname === link.href
                    ? 'flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary'
                    : 'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
                }
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="px-2 text-sm font-medium lg:px-4 mt-auto p-4">
          <Link
            href="/settings"
            className={
              // TODO Replace with isActive in own component
              pathname === '/settings'
                ? 'flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary'
                : 'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            }
          >
            <Settings className="h-5 w-5"/>
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

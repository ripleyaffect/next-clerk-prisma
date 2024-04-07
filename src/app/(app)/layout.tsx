import {
  Home,
  LineChart,
  Package,
  Users,
} from "lucide-react"

import '../globals.css'

import { AppHeader } from './app-header';
import { AppSidebar } from './app-sidebar';
import { cn } from '~/lib/utils';
import { ThemeProvider } from '~/components/theme/theme-provider';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { APP_NAME } from '~/config/constants';

const APP_LINKS = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    href: "/users",
    label: "Users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    href: "/products",
    label: "Products",
    icon: <Package className="h-5 w-5" />,
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: <LineChart className="h-5 w-5" />,
  },
]

const inter = Inter({ subsets: ['latin'] })

export default function AppLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, 'min-h-screen')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
              <AppSidebar
                appName={APP_NAME}
                links={APP_LINKS}
              />
              <div className="flex flex-col">
                <AppHeader
                  links={APP_LINKS}
                />
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '~/components/theme/theme-provider';

import '../globals.css'
import { NavBar } from '~/components/layout/nav-bar';
import { cn } from '~/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { SplashHeader } from '~/app/(splash)/splash-header';
import { APP_NAME } from '~/config/constants';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ripley Starter',
  description: 'Starter template for an app',
}

const SPLASH_LINKS = [
  {
    href: "/product",
    label: "Product",
  },
  {
    href: "/about",
    label: "About",
  },
]


export default function SplashLayout({
  children,
}: {
  children: React.ReactNode
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
            <div className="min-h-screen">
              <SplashHeader
                appName={APP_NAME}
                links={SPLASH_LINKS}
              />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

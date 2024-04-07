import { ClerkProvider } from '@clerk/nextjs';
import Link from 'next/link';

import { cn } from '~/lib/utils';
import { ThemeProvider } from '~/components/theme/theme-provider';
import { Inter } from 'next/font/google';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

import "../globals.css"
import { Sparkles } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({
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
            <div className="w-full h-full min-h-screen lg:grid lg:grid-cols-2">
              <div className="hidden bg-muted lg:block p-5 bg-black text-background font-semibold">
                <Link
                  className="flex w-fit ml-1"
                  href="/"
                >
                  <Sparkles className="h-6 w-6 mr-2" /> Ripley
                </Link>
              </div>
              <div className="h-full min-h-screen flex flex-col p-5">
                <Link
                  className="flex w-fit ml-1 font-semibold lg:hidden"
                  href="/"
                >
                  <Sparkles className="h-6 w-6 mr-2" /> Ripley
                </Link>
                <div className="flex items-center justify-center flex-1">
                  {children}
                </div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

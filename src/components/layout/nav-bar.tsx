'use client';

import { FC } from 'react';
import { ThemeToggle } from '~/components/theme/theme-toggle';
import { Sparkles } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";


const Logo: FC = () => {
  return (
    <span className="flex">
      <Sparkles />
      <span className="ml-2 font-semibold">
        Ripley
      </span>
    </span>
  )
}

export const NavBar: FC = () => {
  return (
    <div className="sticky w-full px-4 top-0 z-50 h-12 bg-background">
      <div className="flex justify-between items-center w-full h-full">
        <Logo />
        <div className="flex items-center">
          <UserButton />
          {/*<ThemeToggle />*/}
        </div>
      </div>
    </div>
  )
}

'use client'

import { FC } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { buttonVariants } from '~/components/ui/button';
import { usePathname } from 'next/navigation';

export type SplashLink = {
  href: string
  label: string
}

export const SplashHeader: FC<{
  appName: string;
  links: SplashLink[];
}> = ({
  appName,
  links,
}) => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav
        className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Sparkles className="h-6 w-6"/>
          <span className="sr-only">{appName}</span>
        </Link>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* TODO: Add Sheet to support mobile */}
      {/*<Sheet>*/}
      {/*  <SheetTrigger asChild>*/}
      {/*    <Button*/}
      {/*      variant="outline"*/}
      {/*      size="icon"*/}
      {/*      className="shrink-0 md:hidden"*/}
      {/*    >*/}
      {/*      <Menu className="h-5 w-5"/>*/}
      {/*      <span className="sr-only">Toggle navigation menu</span>*/}
      {/*    </Button>*/}
      {/*  </SheetTrigger>*/}
      {/*  <SheetContent side="left">*/}
      {/*    <nav className="grid gap-6 text-lg font-medium">*/}
      {/*      <Link*/}
      {/*        href="#"*/}
      {/*        className="flex items-center gap-2 text-lg font-semibold"*/}
      {/*      >*/}
      {/*        <Package2 className="h-6 w-6"/>*/}
      {/*        <span className="sr-only">Acme Inc</span>*/}
      {/*      </Link>*/}
      {/*      <Link href="#" className="hover:text-foreground">*/}
      {/*        Dashboard*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="#"*/}
      {/*        className="text-muted-foreground hover:text-foreground"*/}
      {/*      >*/}
      {/*        Orders*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="#"*/}
      {/*        className="text-muted-foreground hover:text-foreground"*/}
      {/*      >*/}
      {/*        Products*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="#"*/}
      {/*        className="text-muted-foreground hover:text-foreground"*/}
      {/*      >*/}
      {/*        Customers*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="#"*/}
      {/*        className="text-muted-foreground hover:text-foreground"*/}
      {/*      >*/}
      {/*        Analytics*/}
      {/*      </Link>*/}
      {/*    </nav>*/}
      {/*  </SheetContent>*/}
      {/*</Sheet>*/}
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link
          className={buttonVariants({ variant: 'ghost' })}
          href="/sign-in"
        >
          Sign In
        </Link>
        <Link
          className={buttonVariants({ variant: 'default' })}
          href="/sign-up"
        >
          Sign Up
        </Link>
      </div>
    </header>
  )
}

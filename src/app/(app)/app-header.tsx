'use client'

import { FC } from 'react';
import { LineChart, Menu, Search, Sparkles, User } from 'lucide-react';

import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Input } from '~/components/ui/input';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { AppLink } from './app-sidebar';

export const AppHeader: FC<{
  links: AppLink[]
}> = ({
  links,
}) => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-lg font-semibold"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            {/*<Link*/}
            {/*  href="#"*/}
            {/*  className="flex items-center gap-2 text-lg font-semibold"*/}
            {/*>*/}
            {/*  <Sparkles className="h-6 w-6" />*/}
            {/*  <span className="sr-only">Acme Inc</span>*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  href="#"*/}
            {/*  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"*/}
            {/*>*/}
            {/*  <Home className="h-5 w-5" />*/}
            {/*  Dashboard*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  href="#"*/}
            {/*  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"*/}
            {/*>*/}
            {/*  <ShoppingCart className="h-5 w-5" />*/}
            {/*  Orders*/}
            {/*  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">*/}
            {/*    6*/}
            {/*  </Badge>*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  href="#"*/}
            {/*  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"*/}
            {/*>*/}
            {/*  <Package className="h-5 w-5" />*/}
            {/*  Products*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  href="#"*/}
            {/*  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"*/}
            {/*>*/}
            {/*  <Users className="h-5 w-5" />*/}
            {/*  Customers*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  href="#"*/}
            {/*  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"*/}
            {/*>*/}
            {/*  <LineChart className="h-5 w-5" />*/}
            {/*  Analytics*/}
            {/*</Link>*/}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center w-full flex-1">
        {/* TODO Add back if in need of a global search feature */}
        {/*<form className="flex items-center flex-1 m-0">*/}
        {/*  <div className="relative flex-1">*/}
        {/*    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>*/}
        {/*    <Input*/}
        {/*      type="search"*/}
        {/*      placeholder="Search products..."*/}
        {/*      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</form>*/}
      </div>
      <UserButton />
      {/* TODO: Customize the user button as a dropdown */}
      {/*<DropdownMenu>*/}
      {/*  <DropdownMenuTrigger asChild>*/}
      {/*    <Button variant="secondary" size="icon" className="rounded-full">*/}
      {/*      <User className="h-5 w-5"/>*/}
      {/*      <span className="sr-only">Toggle user menu</span>*/}
      {/*    </Button>*/}
      {/*  </DropdownMenuTrigger>*/}
      {/*  <DropdownMenuContent align="end">*/}
      {/*    <DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
      {/*    <DropdownMenuSeparator/>*/}
      {/*    <Link href="/settings">*/}
      {/*      <DropdownMenuItem>*/}
      {/*        Settings*/}
      {/*      </DropdownMenuItem>*/}
      {/*    </Link>*/}
      {/*    <DropdownMenuItem>Support</DropdownMenuItem>*/}
      {/*    <DropdownMenuSeparator/>*/}
      {/*    <DropdownMenuItem>Logout</DropdownMenuItem>*/}
      {/*  </DropdownMenuContent>*/}
      {/*</DropdownMenu>*/}
    </header>
  )
}

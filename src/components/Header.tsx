"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-github-darkblue border-b border-gray-800">
      <div className="container flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="mr-4">
          <Link href="/" className="flex items-center">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="text-white fill-current">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-zinc-400 hover:text-white">Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-github-darkblue to-github-darkblue p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          GitHub Copilot
                        </div>
                        <p className="text-sm leading-tight text-zinc-400">
                          Write better code with AI-powered suggestions.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <NavigationMenuItem>
                    <Link href="/actions" legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center gap-1 p-2 hover:bg-zinc-800 rounded-md">
                        <span className="text-sm font-medium text-white">Actions</span>
                        <span className="text-xs text-zinc-400">Automate workflows</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/codespaces" legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center gap-1 p-2 hover:bg-zinc-800 rounded-md">
                        <span className="text-sm font-medium text-white">Codespaces</span>
                        <span className="text-xs text-zinc-400">Development environments</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/packages" legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center gap-1 p-2 hover:bg-zinc-800 rounded-md">
                        <span className="text-sm font-medium text-white">Packages</span>
                        <span className="text-xs text-zinc-400">Host and manage packages</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/security" legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center gap-1 p-2 hover:bg-zinc-800 rounded-md">
                        <span className="text-sm font-medium text-white">Security</span>
                        <span className="text-xs text-zinc-400">Find and fix vulnerabilities</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-zinc-400 hover:text-white">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li className="text-white text-sm font-medium mb-2">By company size</li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/enterprise" className="text-zinc-400 text-sm hover:text-white">
                        Enterprise
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/team" className="text-zinc-400 text-sm hover:text-white">
                        Small and medium teams
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/startups" className="text-zinc-400 text-sm hover:text-white">
                        Startups
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="text-white text-sm font-medium mb-2 mt-4">By use case</li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/devsecops" className="text-zinc-400 text-sm hover:text-white">
                        DevSecOps
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-zinc-400 hover:text-white`}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex ml-auto items-center space-x-2">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="h-9 rounded-md border border-zinc-700 bg-transparent pl-10 pr-4 text-sm text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 w-64"
            />
            <div className="absolute right-2.5 top-2 border border-zinc-700 rounded-sm px-[5px] py-[1px] text-[10px] text-zinc-500">/</div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600"
          >
            Sign in
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600"
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}

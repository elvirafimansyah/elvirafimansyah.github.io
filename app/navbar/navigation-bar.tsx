"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RiFontSize } from "react-icons/ri";
import Image from "next/image";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const NavigationBar = () => {
  const { setTheme } = useTheme()
  const isWindowDefined = typeof window !== 'undefined';
  if (isWindowDefined && window.localStorage.getItem("theme") === undefined) {
    window.localStorage.setItem("theme", "dark");
  }
  const storedTheme = isWindowDefined ? window.localStorage.getItem("theme") : "dark";
  const [position, setPosition] = React.useState<string>(storedTheme || "dark");

  const bottom_link = [
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Projects",
      link: "/project"
    },
    {
      title: "Certificates",
      link: "/certificate"
    },
    {
      title: "Blog",
      link: "/blog"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ]

  return (
    <div>
      <div className="md:hidden">
        <Sheet >
          <SheetTrigger><IoMenu size="32px" /></SheetTrigger>
          <SheetContent >
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-7 items-start w-full mt-10 text-desc text-base ">
                  <SheetClose asChild >
                    <Link href="/" className="font-medium">Home</Link>
                  </SheetClose>

                  {bottom_link.map((data, idx) => (
                    <SheetClose asChild key={idx}>
                      <Link href={data.link} className="font-medium  ">{data.title}</Link>
                    </SheetClose>
                  ))}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="toggle" size="toggle">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>

        </Sheet>
      </div>
      <div className="hidden md:flex">
        <div className="flex items-center text-foreground space-x-5 lg:space-x-8 text-sm">
         
            <Link href="/" className="font-medium hover:text-primary">Home</Link>
            {bottom_link.map((data, idx) => (
              <Link href={data.link} className="font-medium hover:text-primary" key={idx}>{data.title}</Link>
            ))}

          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="toggle" size="toggle">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 text-primary scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

      </div>
    </div>
  );
}

export default NavigationBar;
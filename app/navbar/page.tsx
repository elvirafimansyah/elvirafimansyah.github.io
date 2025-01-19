"use client"

import { useState, useEffect } from "react";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const scrollNavbar = () => {
    if(window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar)
    return() => {
      window.addEventListener("scroll", scrollNavbar)
    }
  }, [])
  return (  
      <div className={`fixed z-50  ${navbar ? "border-b border-border dark:border-navdark w-full py-2 md:py-1 bg-white dark:bg-navdark" : "bg-nav w-full md:w-[96%] lg:w-[82%]  md:top-3 md:rounded-lg left-1/2 -translate-x-1/2 md:py-0" } py-2 md:py-0 dark:backdrop-blur-[20px]`}>

        <div className={`flex justify-between items-center py-2 mx-auto px-4 sm:px-6 md:pl-5 md:pr-3 ${navbar && "md:w-[95%] lg:w-[80%]"}`}>
          <Link href="/">
            <Logo />
          </Link>
          <NavigationBar />
        </div>

      </div>
   
  );
}

export default Navbar;
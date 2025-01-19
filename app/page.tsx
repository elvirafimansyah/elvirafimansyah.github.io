"use client"
import Project from "./project/page"
import Footer from "@/components/footer";
import { useEffect } from "react";
import Beranda from "./home/page";
export default function Home() {
  useEffect(() => {
    document.title = "Portfolio | ELvira Firmansyah"
  }, [])
  return (
   <>
    <Beranda />
   </>
  )
}

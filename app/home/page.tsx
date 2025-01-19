"use client"
import { useEffect } from "react";
import Home from "./home";


const Beranda = () => {
  useEffect(() => {
      document.title = "Elvira Firmansyah | Portfolio"
  }, [])
  return (
    <>
      <Home />
      
    </>
  );
}

export default Beranda;
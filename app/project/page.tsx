"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import projectLists from "../../data/project.json";
import Dev from './dev';
import Design from "./design";

const Project = () => {
  useEffect(() => {
    document.title = "Projects | Elvira Firmansyah"
  }, [])
  const sourceCategories = ["all", "dev", "design"]
  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container >
        <section id="project" className="py-28 overflow-hidden ">
          <div className="flex flex-col items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title text-primary">Projects</h1>
              <p className="text-desc text-lg tracking-desc font-normal">A few highlights of my open-source projects. View them all on <a href="https://github.com/elvirafimansyah" target="_blank" className="hover:underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">Github</a> and <a href="https://dribbble.com/ElviraFir" target="_blank" className="hover:underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">Dribbble</a></p>
            </div>
            <div className="w-full">
              <Tabs defaultValue={sourceCategories[0]} >
                <div className="mt-5 mb-2 flex xl:items-center justify-center overflow-x-auto tab-container scroll-my-1 pb-2.5">
                  <TabsList>
                    {sourceCategories.map((kategori, idx) => (
                      <TabsTrigger key={idx} value={kategori} className="snap-center">{kategori}</TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark" />
                <div>
                  <TabsContent value="all">
                    <Dev />
                    <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark mt-10 mb-6" />
                    <Design variant="all"/>
                  </TabsContent>
                  <TabsContent value="dev">
                    <Dev />
                  </TabsContent>
                  <TabsContent value="design">
                    <Design variant="design" />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </Container>
    </div>

  );
}

export default Project;
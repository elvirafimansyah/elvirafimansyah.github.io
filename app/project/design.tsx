"use client"
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"
import Project from "./dev";
interface projectData {
  name?: string;
  slug?: string;
  tagline?: string;
  url?: string;
  category?: string;
  type?: string;
  img?: string;
}

interface dribbbleData {
  title?: string,
  images?: {
    hidpi?: string
  },
  html_url?: string,
  published_at?: string,
  updated_at?: string
}
interface designProps {
  variant?: string;
}

const Design :  React.FC<designProps> = ({variant}) => {
  const [list, setList] = useState<dribbbleData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDribbble() {
      const dribbble = await fetch(
        'https://api.dribbble.com/v2/user/shots?access_token=f907fdc0d021822663c504699ef1141a9ed4acc2715c51b3817f2a7aa430bb4f'
      )

      return dribbble.json()
    }
    getDribbble()
      .then((data) => {
        setList(data)
        setLoading(false);
      })
      .catch((err) => console.log(err))
  }, [])

  const loading_card = [...Array(6)]

  return (
    <>
      <div className="mb-5">
        <h4 className="text-lg font-bold tracking-desc leading-tight">Design Projects</h4>
        <span className="text-desc font-medium tracking-desc leading-[1]">A few of my design projects. View them all on <a href="https://dribbble.com/ElviraFir" target="_blank" className="hover:underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">Dribbble</a></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ?
            loading_card.map(_ => 
              <>
                <Skeleton className="border cursor-pointer relative border-bordersoft bg-soft hover:bg-hoversoft rounded-xl overflow-hidden h-[461px] " />
              </> 
            )
          :
          list.map((project, key) => (
            <div key={key} className={`border border-bordersoft cursor-pointer relative bg-soft hover:bg-hoversoft rounded-xl overflow-hidden`}>
              <div>
                <Image
                  src={project.images?.hidpi ? project.images.hidpi : "/assets/img/covore.png"}
                  width={1200}
                  height={800}
                  alt="laptop"
                  className="w-full h-[235px] rounded-t-xl object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline">
                  <Badge variant="primary">UI/UX Design</Badge>
                </div>
                <h2 className="mt-1 font-bold text-xl">{project.title} Design</h2>
                <p className="text-desc text-base leading-normal font-medium pb-12">{project.published_at ? new Date(project.published_at).toLocaleDateString() : "0"}</p>
                <div className="pt-3 flex flex-row space-x-2 items-center ">
                  <a href={project.html_url} target="_blank">
                    <Button variant="primary" className="absolute bottom-6"><i className="fa-brands fa-dribbble"></i> &nbsp;Dribbble</Button>
                  </a>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </>

  );
}

export default Design;
"use client"
import React from "react";
import { useState, useEffect } from "react";
import projectLists from "../../data/project.json";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"

interface projectData {
  name?: string;
  slug?: string;
  tagline?: string;
  url?: string;
  category?: string;
  type?: string;
  img?: string;
}

interface githubData {
  name?: string;
  slug?: string;
  stargazers_count?: number;
}

const project_data = projectLists as projectData[];

const Dev = () => {
  const [repos, setRepos] = useState<githubData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/elvirafimansyah/repos'
      )

      return repos.json()
    }
    getStars()
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => console.log(err))

  }, [])

  const loading_card = [...Array(6)]

  return (
    <>
      <div className="mb-5">
        <h4 className="text-lg font-bold tracking-desc leading-tight">Dev Projects</h4>
        <span className="text-desc font-medium tracking-desc leading-[1]">A few of my dev projects. View them all on <a href="https://github.com/elvirafimansyah" target="_blank" className="hover:underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">Github</a></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ?
          loading_card.map(_ =>
            <>
              <Skeleton className="border cursor-pointer relative border-bordersoft bg-soft hover:bg-hoversoft rounded-xl overflow-hidden h-[461px] " />
            </>
          ) :
          project_data.map((project, key) => (
            <div key={key} className="border cursor-pointer relative border-bordersoft bg-soft hover:bg-hoversoft rounded-xl overflow-hidden ">
              <div>
                <Image
                  src={project.img ? project.img : "/assets/img/covore.png"}
                  width={1200}
                  height={800}
                  alt="laptop"
                  className="w-full h-[235px] rounded-t-xl object-cover"
                />
              </div>
              <div className="  p-6">
                <div className="flex items-baseline">
                  <Badge variant="primary">{project.category}</Badge>
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
                <h2 className="mt-1 font-bold line-clamp-1 text-xl">{project.name}</h2>
                <p className="text-desc text-base leading-normal font-medium">{project.tagline}</p>
                <div className="flex items-center py-2">
                  {repos.find((repo) => repo.name === project.slug) && (
                    <>
                      <a
                        href={`https://github.com/elvirafimansyah/${project.slug}/stargazers`}
                        target="blank"
                      >
                        <Badge variant="warning" className="flex space-x-2">
                          <div color="text-[#ECC94B]">
                            <i className="fa-solid fa-star" ></i>
                          </div>
                          <span className="text-[#744210] dark:text-yellow-foreground">
                            {repos.find((repo) => repo.name == project.slug)?.stargazers_count ? Number(repos.find((repo) => repo.name == project.slug)?.stargazers_count).toLocaleString() : "0"} &nbsp;STARS
                          </span>
                        </Badge>
                      </a>
                    </>
                  )}
                </div>
                <div className="pt-2 pb-1 flex flex-row space-x-2 items-center">
                  <a href={`https://github.com/elvirafimansyah/${project.slug}`} target="_blank">
                    <Button variant="detail_outline" className="hover:bg-card2 dark:hover:bg-hoversoft2"><i className="fa-brands fa-github"></i>&nbsp; Github</Button>
                  </a>
                  <a href={project.url} target="_blank">
                    <Button variant="primary">Demo &nbsp; <i className="fa-solid fa-up-right-from-square"></i></Button>
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

export default Dev;
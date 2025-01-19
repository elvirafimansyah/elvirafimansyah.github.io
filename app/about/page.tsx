"use client"
import Image from "next/image";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaMessage } from "react-icons/fa6";
import Link from "next/link";
import Skills from "./skills";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
     document.title = "About | Elvira Firmansyah"
  }, [])
  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section id="about" className="pt-28 pb-16 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 xl:pb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0 ">
            <div className="md:w-[56%] lg:w-[62%] xl:w-[56%] space-y-2">
              <h1 className="font-bold text-3xl  lg:leading-[52px] xl:text-4xl xl:leading-[60px] tracking-title text-primary">About <span className="text-foreground">Me</span></h1>

              <p className="text-desc text-base xl:text-deskripsi leading-normal font-medium flex space-y-3 flex-col">
                <span>  
                  Hello! I am Elvira Firmansyah. I&apos;m from Indonesia. I&apos;m a student. I enjoy learning something new and getting feedback to make myself better and improve.
                </span>
                <span>
                  I adore the ideas of what I can build through coding. From that point, I started learning web development tools such as <a href="https://react.dev/" target ="_blank" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">React</a> & <a href="https://tailwindcss.com/" target ="_blank" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">Tailwind</a>
                </span>
                <span>
                  I am a person who is interested in UI/UX Design and Front-End Development. I am passionate about building a career in UI/UX design & development, to which I would bring dedication, enthusiasm and creativity. I am seeing a part-time position in the industry in which I can put into practice my knowledge and experience.
                </span>
                <span>
                Check out the <Link href="/project" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">projects</Link> page to see a highlight of the open-source projects I&apos;ve made, and <Link href="/blog" className="underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">blog</Link> to see everything I&apos;ve written

                </span>
              </p>

              <div className="flex gap-x-3 pt-4">
                <Button variant="detail_outline" ><a href="assets/img/cv.png" target="_blank">View CV</a></Button>  
                <Button variant="primary" className="flex items-center"><FaMessage />&nbsp;&nbsp;<Link href="/contact">Contact Me
                </Link></Button>
              </div>
            </div>

            <div className="ml-10 w-4/5 sm:w-3/4 md:w-1/3 lg:w-[29%] flex items-center justify-center md:-mr-5 lg:-mr-7 xl:-mr-10">
              <div className="bg-second-background dark:bg-navdark w-3/4 rounded-lg border-b border-border dark:border-navdark  ">
                <Image
                  src="/assets/img/techgirl.png"
                  width={1000}
                  height={1000}
                  alt="gambar"
                  className="transition ease-in-out duration-1000 hover:scale-90  hover:rotate-[8deg] hover:cursor-pointer hover:drop-shadow-techgirl "
                  
                />
              </div>
            </div>

          </div>

          <hr className="mt-20 mb-5" />

        <Skills />
        </section>
      </Container>
    </div>
  );
}

export default About;
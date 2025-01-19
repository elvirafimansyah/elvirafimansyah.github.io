"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/container";
import certificateList from "../../data/certificate.json";
import { Badge } from "@/components/ui/badge"
interface certificateData {
  name?: string;
  category?: string;
  img?: string;
}
const certificate_data = certificateList as certificateData[];

const Certificate = () => {
  useEffect(() => {
    document.title = "Certificates | Elvira Firmansyah"
  }, [])

  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section id="certificate" className="py-28 overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2  ">
              <div className="flex flex-col justify-center items-center text-center pb-3">
                <h1 className="font-bold text-4xl lg:text-title2 tracking-title text-primary">Certificates</h1>
                <p className="text-desc text-lg tracking-desc font-normal  max-w-xl">Recognitions of my achievements and skills, showcasing my journey of learning and growth.</p>
              </div>
              <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark " />
            </div>
            <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {certificate_data.map((_, key) => (
                <div key={key} className={`border border-bordersoft cursor-pointer relative bg-soft hover:bg-hoversoft rounded-xl overflow-hidden`}>
                  <div>
                    <Image
                      src={_.img ? _.img : "/assets/certificates/lksprovinsi.jpg"}
                      width={3000}
                      height={3000}
                      alt="laptop"
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline">
                      <Badge variant="primary">{_.category}</Badge>
                    </div>
                    <h2 className="mt-1 font-bold text-xl">{_.name}</h2>
                  </div>
                </div>

              ))}

            </div>
          </div>
        </section>
      </Container>
    </div>

  );
}

export default Certificate;
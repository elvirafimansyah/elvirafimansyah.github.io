"use client"
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const style_nextjs = { color: theme == "light" ? "black" : "white", fontSize: "19px"}

  const first_data = [
    {
      id: 1,
      name: "Languages",
      code: [
        {
          name: "HTML",
          icon: <i className="fa-brands fa-html5"></i>,
          color: "language-html",
        },
        {
          name: "CSS",
          icon: <i className="fa-brands fa-css3-alt"></i>,
          color: "language-css",
        },
        {
          name: "JavaScript",
          icon: <i className="fa-brands fa-js"></i>,
          color: "language-js",
        },
        {
          name: "PHP",
          icon: <i className="fa-brands fa-php"></i>,
          color: "language-php",
        },
      ],
      code_img: [
        {
          name: "Kotlin",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/600px-Kotlin_Icon.png?20210501145042",
          url: "https://kotlinlang.org/"
        },
        {
          name: "C#",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/205px-C_Sharp_Logo_2023.svg.png",
          url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
        },
      ]
    },
  ]
  const official_data = [

    {
      id: 2,
      name: "Libraries",
      code: [
        {
          name: "React.js",
          icon: <i className="fa-brands fa-react"></i>,
          color: "language-react",
          url: "https://reactjs.org/"
        },
      ],
      code_img: [

        {
          name: "Styled-Components",
          img: "https://styled-components.com/atom.png",
          url: "https://styled-components.com/"
        },
        {
          name: "Chakra-UI",
          img: "https://avatars.githubusercontent.com/u/54212428?s=200&v=4",
          url: "https://chakra-ui.com/"
        }
      ]
    },
    {
      id: 3,
      name: "Framework",
      code: [
        {
          name: "Boostrap",
          icon: <i className="fa-brands fa-bootstrap"></i>,
          color: "language-bootstrap",
          url: "https://getbootstrap.com/"
        },
        {
          name: "Laravel",
          icon: <i className="fa-brands fa-laravel"></i>,
          color: "language-laravel",
          url: "https://laravel.com/"
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs style={style_nextjs} />,
          color: "",
          url: "https://nextjs.org/"
        },
        
      ],
      code_img: [
        {
          name: "Tailwind",
          img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          url: "https://tailwindcss.com/"
        },
      ]
    },
    {
      id: 4,
      name: "Tools & Systems",
      code: [
        {
          name: "Github",
          icon: <i className="fa-brands fa-github"></i>,
          color: theme == "light" ? "language-github" : "white",
          url: "http://github.com/"
        },
        {
          name: "Git",
          icon: <i className="fa-brands fa-git-alt"></i>,
          color: "language-git",
          url: "https://git-scm.com/"
        },
      ],
      code_img: [
        {
          name: "Figma",
          img: "https://avatars.githubusercontent.com/u/5155369?s=200&v=4",
          url: "https://www.figma.com/"
        },
        {
          name: "VSCode",
          img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
          url: "https://code.visualstudio.com/"
        }
      ]
    },
  ]

  return (
    <div>
      <h1 className="font-bold text-3xl xl:text-[1.7rem] tracking-title text-primary">Skills </h1>
      {first_data.map((_) => (
        <div key={_.id}>
          <h4 className="font-medium text-lg my-2">{_.name}</h4>
          <div className="flex flex-col md:flex-row flex-wrap md:space-x-2 space-y-2 md:space-y-0 items-start md:items-center">
            {_.code.map((item, key,) => (

              <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center  dark:bg-card  hover:bg-navlight dark:hover:bg-card2 hover:cursor-default" key={key}>
                <div className={`text-${item.color}`}>
                  {item.icon}
                </div>
                &nbsp;&nbsp;
                {item.name}
              </div>
            ))}

            {_.code_img.map((item, key,) => (
              <a href={item.url} target="_blank" key={key}>
                <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center hover:bg-navlight dark:hover:bg-card2 dark:bg-card">
                  <div className="flex items-center">
                    <div className="w-5">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt="language"
                      />
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    {item.name}
                  </div>

                </div>
              </a>
            ))}
          </div>
        </div>

      ))}

      {official_data.map((_) => (
        <div key={_.id}>
          <h4 className="font-medium text-lg my-2">{_.name}</h4>
          <div className="flex flex-col md:flex-row flex-wrap md:space-x-2 space-y-2 md:space-y-0 items-start md:items-center">
            {_.code.map((item, key,) => (
              <a href={item.url} target="_blank" key={key}>
                <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center dark:bg-card hover:bg-navlight dark:hover:bg-card2">
                  <div className={`text-${item.color}`}>
                    {item.icon}
                  </div>
                  &nbsp;&nbsp;
                  {item.name}
                </div>
              </a>
            ))}

            {_.code_img.map((item, key,) => (
              <a href={item.url} target="_blank" key={key}>
                <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center dark:bg-card hover:bg-navlight dark:hover:bg-card2">
                  <div className="flex items-center">
                    <div className="w-5">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt="language"
                      />
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    {item.name}
                  </div>

                </div>
              </a>
            ))}
          </div>
        </div>

      ))}

    </div>
  );
}

export default Skills;
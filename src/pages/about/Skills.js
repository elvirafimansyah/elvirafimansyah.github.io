import {
  Stack,
  Text,
  Box,
  useColorModeValue
} from "@chakra-ui/react"

import { SButton, SGButton }from "../../components/SButton"

const Skills = () => {
  const STitle = (props) => {
    return(
      <Text fontSize="lg" fontWeight="medium" color={useColorModeValue("gray.700", "gray.300")}>{props.name}</Text>
    )
  }
  const languages = [
    {
      name: "HTML",
      icon: <i class="fa-brands fa-html5"></i>,
      color: "language.html",
    },
    {
      name: "CSS",
      icon: <i class="fa-brands fa-css3-alt"></i>,
      color: "language.css",
    },
    {
      name: "JavaScript",
      icon: <i class="fa-brands fa-js"></i>,
      color: "language.js",
    },
    {
      name: "PHP",
      icon: <i class="fa-brands fa-php"></i>,
      color: "language.php",
    },
  ]
  const languages_img = [
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
  const libraies = [
    {
      name: "React.js",
      icon: <i class="fa-brands fa-react"></i>,
      color: "language.react",
      url: "https://reactjs.org/"
    },
  ]
  const libraies_img = [
   
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
  const framework = [
    {
      name: "Boostrap",
      icon: <i class="fa-brands fa-bootstrap"></i>,
      color: "language.bootstrap",
      url:"https://getbootstrap.com/"
    },
    {
      name: "Laravel",
      icon: <i class="fa-brands fa-laravel"></i>,
      color: "language.laravel",
      url: "https://laravel.com/"
    },
  ]
  const framework_img = [
    {
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      url:"https://tailwindcss.com/"
    },
    {
      name: "Next.js",
      img: "/assets/icon/nextjs.png",
      url: "https://nextjs.org/"
    },
  ]
  const tools = [
    {
      name: "Github",
      icon: <i class="fa-brands fa-github"></i>,
      color: useColorModeValue("language.github","white"),
      url:"http://github.com/"
    },
    {
      name: "Git",
      icon: <i class="fa-brands fa-git-alt"></i>,
      color: "language.git",
      url:"https://git-scm.com/"
    },
  ]
  const tools_img = [
    {
      name: "Figma",
      img: "https://avatars.githubusercontent.com/u/5155369?s=200&v=4",
      url:"https://www.figma.com/"
    },
    {
      name: "VSCode",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      url:"https://code.visualstudio.com/"
    }
  ]
  return(
    <>
    <Box
      pt={4}
      pb={[20]}
    >
      <Text fontSize={"2xl"} pb={2}fontWeight="650" color={"turquo"}>Skills</Text>
      <Box>
        <STitle name="Languages" />
        <Stack 
          direction={["column","column","row","row"]}
          alignItems={["stretch","stretch","stretch","center"]}
          wrap="wrap"
          spacing={2}
          py="2"
        >
          {languages.map((item) => (
            <SButton 
              url={item.url}
              icon={item.icon}
              color={item.color}
              name={item.name}
            />
          ))}
          {languages_img.map((item) => (
            <SGButton 
              url={item.url}
              img={item.img}
              name={item.name}
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <STitle name="Libraries" />
        <Stack 
          direction={["column","column","row","row"]}
          alignItems={["stretch","stretch","stretch","center"]}
          wrap="wrap"
          spacing={2}
          py="2"
        >
          {libraies.map((item) => (
            <SButton 
              url={item.url}
              icon={item.icon}
              color={item.color}
              name={item.name}
            />
          ))}
          {libraies_img.map((item) => (
            <SGButton 
              url={item.url}
              img={item.img}
              name={item.name}
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <STitle name="Framework"/>
        <Stack 
          direction={["column","column","row","row"]}
          alignItems={["stretch","stretch","stretch","center"]}
          wrap="wrap"
          spacing={2}
          py="2"
        >
          {framework_img.map((item) => (
            <SGButton 
              url={item.url}
              img={item.img}
              name={item.name}
            />
          ))}
          {framework.map((item) => (
            <SButton 
              url={item.url}
              icon={item.icon}
              color={item.color}
              name={item.name}
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <STitle name="Tools & Systems" />
        <Stack 
          direction={["column","column","row","row"]}
          alignItems={["stretch","stretch","stretch","center"]}
          wrap="wrap"
          spacing={2}
          py="2"
        >
          {tools.map((item) => (
            <SButton 
              url={item.url}
              icon={item.icon}
              color={item.color}
              name={item.name}
            />
          ))}
          {tools_img.map((item) => (
            <SGButton 
              url={item.url}
              img={item.img}
              name={item.name}
            />
          ))}
        </Stack>
      </Box>
    </Box>
    </>
  )
}


export default Skills;
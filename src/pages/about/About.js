import { useEffect } from "react";
import { Link }  from "react-router-dom"
import {
  chakra,
  Heading,
  useColorModeValue,
  Stack,
  Flex,
  Divider,
  Text,
  Image,
  Box,
  Button,
  HStack
} from '@chakra-ui/react'

import Skills from "./Skills";
import Main from "../../layouts/Main";

const Span = ({...props}) => {
  return(
    <chakra.span color={useColorModeValue("gray.800", "white")} _hover={{color: props.color, cursor: props.cursor}} textDecoration="underline" textDecorationColor="green.300" textDecorationThickness="2px" textUnderlineOffset={3} {...props}>{props.text}</chakra.span>
  )
}
export default function About() {
  useEffect(function() {
    document.title = 'About | Elvira Firmansyah';
  }, []);

  const TextP = ({children, ...props}) => {
    return(
      <Text color={useColorModeValue("gray.700", "twhite")} fontWeight="450" fontSize={"lg"} {...props}>
        {children}
      </Text>
    )
  }
  return (
    <>
    <Main>
      <Box pb={20} >
        <Stack
          direction={"row"} 
          py={8}
          alignItems="center"
        >
          <Heading w={"250px"} color={useColorModeValue("gray.700","white")}><chakra.span color={useColorModeValue("green.400","green.300")}>About</chakra.span> Me</Heading>
          <Divider />
        </Stack>
        <Flex
          justifyContent={"space-between"}
          direction={["column","column","row", "row"]}
          alignItems="center"
        >
          <Stack 
            maxW={["md","3xl","md","xl"]}
            spacing={3}
            pb={[10, 0]}
          >
            <TextP>
              Hello! I am Elvira Firmansyah I'm from Indonesia. I'm a student. I enjoy learning something new and getting feedback to make myself better and improve.
            </TextP>
            <TextP>
              I started coding at the age of twelve, and haven’t stopped since.  I adore the ideas of what I can build through coding. From that point, I started learning web development tools such as <a href="https://reactjs.org" target="blank"><Span text="React"/></a> & <a href="https://reactjs.org" target="blank"><Span text="Tailwind"/></a>
            </TextP>
            <TextP>
              I am a person who is interested in UI/UX Design and Front-End Development I am passionate about building a career in UI/UX design & development, to which I would bring dedication, enthusiasm and creativity. I am seeing a part-time position in the industry in which I can put into practice my knowledge and experience.
            </TextP>
            <TextP pb="2">
              Check out the <a href="/projects"><Span text="projects" cursor="pointer" /></a> page to see a highlight of the open-source projects I've made, and <a href="/blog"><Span text="blog"/></a> to see everything I've written
            </TextP>
            <HStack alignItems="flex-start" >
              <a
                href={process.env.PUBLIC_URL + 'assets/img/cv.png'}
                target="_blank"
                rel="noreferrer"
              >
                <Button border="1px" borderColor={useColorModeValue("gray.200", "whiteAlpha.200")} _hover={{ bg: useColorModeValue("#F1F2F6", "whiteAlpha.50") }}  bg="transparent">View CV</Button>
              </a>
              <Link to="/contact">
                <Button bg={"green.400"} color="white"variant="solid" _hover={{bg: "green.500"}}
                  display="flex" alignItems="center" 
                >
                  <Box>
                    <i class="fa-solid fa-message"></i>
                  </Box> &nbsp;
                  Contact Me 
                </Button>
              </Link>
            </HStack>
          </Stack>
          
          <Image 
            borderRadius={20}
            boxSize={250}
            src={process.env.PUBLIC_URL + 'assets/img/profile.png'}
            border='2px' 
            borderColor={useColorModeValue('green.400', "green.300")}
            p={2}
          />
        </Flex>
      </Box>
      <Divider />
      <Skills />
    </Main>
    </>
  );
}

export {Span};
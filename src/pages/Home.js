import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom"
import {
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Box,
  Hide,
  Container,
} from "@chakra-ui/react"

import Contact from './Contact';
import { ProjectContent } from './projects/Project';
import NavBar from './nav/Navbar';
import LatestBlog from "./blog/LatestBlog"

export default function Home() {
  const infoLinks = [
    {
      name: "github",
      url: "https://github.com/elvirafimansyah",
      icon: <i class="fa-brands fa-github fa-xl "></i>
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/virn_el",
      icon: <i class="fa-brands fa-instagram fa-xl"></i>
    },
    {
      name: "twitter",
      url: "https://twitter.com/elvirafirmansy1",
      icon: <i class="fa-brands fa-twitter fa-xl"></i>
    },
    {
      name: "dribbble",
      url: "https://dribbble.com/ElviraFir",
      icon: <i class="fa-brands fa-dribbble fa-xl"></i>
    }
  ]
  useEffect(function () {
    document.title = 'Elvira Firmansyah | Portfolio';
  }, []);

  return (
    <>
      <NavBar />
      <Container maxW={"6xl"}>
        <Flex
          direction={["column", "column", "row", "row"]}
          justifyContent={["center", "space-around"]}
          alignItems={"center"}
        >
          <Stack
            mt={["28", "28", "40", "40"]}
            mb={[2, 3, 40]}
            display="inline"
            spacing={5}
            direction={"column"}
            color={useColorModeValue("gray.700", "white")}
          >
            <Box>
              <Heading
                size='xl'
                pb={2}
              >
                Hello, I'm
                <Heading
                  color={"turquo"}
                  size={["2xl"]}
                  ml={"-2px"}
                >
                  Elvira Firmansyah
                </Heading>
              </Heading>
              <Text
                fontSize='xl'
                color={useColorModeValue("gray.500", "gray.300")}
              >
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {

                    typewriter
                      .typeString(`I'm Web Developer`)
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("I'm UI/UX Designer")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </Text>
            </Box>
            <Stack direction={"row"} spacing={5} >
              {infoLinks.map((data) => (
                <Box _hover={{color: "turquo"}}>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.icon}
                  </a>
                </Box>
              ))}
            </Stack>
            <Stack
              direction={"row"}
              spacing={3}
            >
              <a
                href={process.env.PUBLIC_URL + 'assets/img/cv.png'}
                target="_blank"
                rel="noreferrer"
              >
                <Button bg="turquo" color="white" _hover={{ bg: "darkturquo"}} _focus={{boxShadow: "none"}} py={5} fontWeight="medium">Resume</Button>
              </a>

              <Button border="1px" borderColor={useColorModeValue("gray.200", "whiteAlpha.200")} _hover={{ bg: useColorModeValue("lightgray", "whiteAlpha.50") }} bg="transparant" display="flex" alignItems={"center"} _focus={{ boxShadow: "none" }} fontWeight="medium">
                <Link
                  to="about"
                >
                  More Details &nbsp;
                </Link>
                <Box>
                  <i class="fa-solid fa-arrow-right"></i>
                </Box>
              </Button>
            </Stack>
          </Stack>
            <Image
              boxSize={300}
              src={process.env.PUBLIC_URL + 'assets/img/techgirl.png'}
              mt={[0, 0, -10, -10]}
            />
        </Flex>

        <LatestBlog />
        <Hide breakpoint='(min-width: 700px)' >
          <ProjectContent />
          <Contact />
        </Hide>
      </Container>
    </>
  );
}

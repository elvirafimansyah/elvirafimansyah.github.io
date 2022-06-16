import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Link }  from "react-router-dom"
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


export default function Home() {
  const infoLinks = [
    {
      name: "github",
      url: "https://github.com/elvirafimansyah",
      icon: <i class="fa-brands fa-github fa-xl "></i>
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/elvinaelvira.s",
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
  useEffect(function() {
    document.title = 'Elvira Firmansyah | Portfolio';
  }, []);

  return (
    <>
    <NavBar />

    <Container maxW="container.lg">
      <Flex 
        direction={["column","column","row", "row"]}
        justifyContent={["center","space-around"]}
        alignItems={"center"}
        h={"100vh"}
      >
        <Stack 
          mt={["5","20","10","10"]} 
          display="inline"
          spacing={3}
          direction={"column"}
          mb={[10, 20]}
          color={useColorModeValue("gray.700", "white")}
        >
          <Box>
            <Heading
              size='xl'
              pb={1}
            >
              Hello, I'm
              <Heading  
                color={useColorModeValue("green.400", "green.300")} 
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
                    .start();
                }}
              /> 
            </Text>
          </Box>
          <Stack direction={"row"} spacing={4} >
            {infoLinks.map((data) => (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
              >
                {data.icon}
              </a>
            ))}
          </Stack>
          <Stack
            direction={"row"}
          >
            <a
              href={process.env.PUBLIC_URL + 'assets/img/cv.png'}
              target="_blank"
              rel="noreferrer"
            >
              <Button border='1px' borderColor={useColorModeValue("green.400",'green.300')} color={useColorModeValue("green.400","green.300")} bg="transparent" _hover={{bg: useColorModeValue("green.50", "whiteAlpha.100")}}>Resume</Button>
            </a>
            
              <Button colorScheme="gray" display="flex" alignItems={"center"}  > 
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
          borderRadius='full'
          boxSize={250}
          src={process.env.PUBLIC_URL + 'assets/img/profile.png'}
          border='2px' 
          borderColor={useColorModeValue('green.400', "green.300")}
          p={2}
          mb={[0, 10]}
        />
      </Flex>
      <Hide breakpoint='(min-width: 700px)' >
        <ProjectContent />
        <Contact />
      </Hide>
    </Container>
    </>
  );
}

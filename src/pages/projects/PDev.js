import { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Badge,
  Image,
  chakra,
  Stack,
  Button,
  useColorMode
} from "@chakra-ui/react";

import { projectsList } from "./PData";
import Category from "../../components/category";

export default function Dev() {
  const { colorMode } = useColorMode()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    document.title = 'Projects';
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/elvirafimansyah/repos'
      )
      return repos.json()
    }
    getStars()
      .then((data) => {
        setRepos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Category
        title="Dev Projects"
        description='A few of my dev projects. View them all'
        src="Github"
        url="https://github.com/elvirafimansyah"
      />
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        spacing={5}
        py={7}
      >
        {projectsList.map((project) => (
          <Box maxW='sm' borderWidth='1px' borderColor="gray.200" borderRadius='lg' bg="gray.50" _dark={{bg: "lightdark1", borderColor: "lightdark2"}} overflow='hidden' key={project.name} >
            <Image src={project.img} alt={project.name} width="full" height="210px"/>
            <Box p='6' >
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' border="1px" borderColor="lightgray2" px={3} py={1} mr={2} mb={1} color="turquo" bg="white" _dark={{ bg: "lightdark2", borderColor: "lightdark3"}}>
                  {project.category}
                </Badge>
                <Badge borderRadius='full' border="1px" borderColor="lightgray2" px={3} py={1} mr={2} mb={1} bg="white" _dark={{ bg: "lightdark2", borderColor: "lightdark3" }}>
                  {project.type}
                </Badge>
              </Box>
              <Box
                mt='1'
                fontWeight='bold'
                as='h2'
                lineHeight='tight'
                noOfLines={1}
                fontSize={"20px"}
              >
                {project.name}
              </Box>
              <Box color="gray.300" _light={{ color: "gray.700" }}>{project.tagline}</Box>
              <Box display='flex' alignItems='center' py={2} >
                {repos.find((repo) => repo.name === project.slug) && (
                  <>
                    <a
                      href={`https://github.com/elvirafimansyah/${project.slug}/stargazers`}
                      target="blank"
                    >
                      <Badge  colorScheme='yellow' display="flex" px={2} py={1}>
                        <Box color={"yellow.400"} pr={2}>
                          <i class="fa-solid fa-star" ></i>
                        </Box>
                        <chakra.span
                          gray="white"
                        >
                          {Number(
                            repos.find((repo) => repo.name === project.slug)
                              .stargazers_count
                          ).toLocaleString()}
                        </chakra.span>
                        &nbsp;
                        {` stars`}
                      </Badge>
                    </a>
                  </>
                )}
              </Box>
              <Box py={1}>
                <Stack direction={"row"} spacing={3}>
                  <a
                    target="blank"
                    href={`https://github.com/elvirafimansyah/${project.slug}`}
                  >
                    <Button bg="transparant" _dark={{ borderColor: "lightdark3" }} _hover={{bg: "transparant"}}   border="1px" borderColor="lightgray2" fontWeight="medium" rounded="lg" _focus={{boxShadow: "none"}} ><i class="fa-brands fa-github"></i>&nbsp; Github</Button>
                  </a>
                  <a
                    target="blank"
                    href={project.url}
                  >
                    <Button color={"white"} bg="turquo" _hover={{ bg: "darkturquo" }} _focus={{ boxShadow: "none" }} rounded="lg">Demo &nbsp; <i class="fa-solid fa-up-right-from-square"></i></Button>
                  </a>

                </Stack>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}


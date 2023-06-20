import { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Badge,
  Image,
  Button,
} from "@chakra-ui/react";

import Category from "../../components/category";

export default function DesignProjects() {
  const [post, setPost] = useState([])
  useEffect(() => {
    async function getShot() {
      const url_shot = "https://api.dribbble.com/v2/user/shots?access_token=f907fdc0d021822663c504699ef1141a9ed4acc2715c51b3817f2a7aa430bb4f"
      const req = await fetch(url_shot)
      const resp = await req.json()
      setPost(resp)
    }
    getShot()
  }, []);
  return (
    <>
      <Category
        title="Design Projects"
        description="A few of my design projects. View them all "
        src='Dribbble'
        url="https://dribbble.com/ElviraFir"
      />
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        spacing={5}
        py={7}
      >
        {post.map((project) => (
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={project.name} pos="relative" >
            <Image src={project.images.hidpi} alt={project.img} />
            <Box p='6' >
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px={2} mr={2} colorScheme='teal'>
                  ui/ux design
                </Badge>
              </Box>
              <Box
                mt='1'
                fontWeight='bold'
                as='h2'
                fontSize={"20px"}
              >
                {project.title + " Design"}
              </Box>
              <Box pb="12" color="gray.300" _light={{ color: "gray.600" }}>
                {new Date(project.published_at).toLocaleDateString()}
              </Box>
              <Box pt={2} >
                <a
                  target="blank"
                  href={project.html_url}
                >
                  <Button bg="green.400" _hover={{bg: "green.500"}} color="white" _focus={{boxShadow: "none"}} pos="absolute" bottom="6"><i class="fa-brands fa-dribbble"></i>&nbsp; Dribbble</Button>
                </a>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}
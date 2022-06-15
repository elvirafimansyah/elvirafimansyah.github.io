import { 
  Box,
  SimpleGrid,
  Badge,
  Image,
  Button,
} from "@chakra-ui/react";

import { Design } from "./PData";
import Category from "../../components/category";

export default function DesignProjects() {
  return(
    <>
    <Category 
      title="Design Projects"
      description="A few of my design projects. View them all "
      src='Dribbble'
      url="https://dribbble.com/ElviraFir"
    />
    <SimpleGrid
      columns={[1,2,3]} 
      spacing={5}
      py={7}
      >
      {Design.map((project) => (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={project.name} >
          <Image src={project.img} alt={project.img} />
          <Box p='6' >
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px={2} mr={2} colorScheme='teal'>
                {project.category}
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
            <Box>{project.tagline}</Box>
            <Box pt={2}>
              <a
                target="blank"
                href={project.url}
              >
                <Button colorScheme="gray" ><i class="fa-brands fa-dribbble"></i>&nbsp; Dribbble</Button>
              </a>
            </Box>
          </Box>
        </Box>
      ))}

    </SimpleGrid>
    </>
  )
}
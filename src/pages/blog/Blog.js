import { useEffect } from "react";
import Main from "../../layouts/Main";
import Title from "../../components/Title";
import {
  Box,
  Divider,
  VStack,
  useColorModeValue
} from "@chakra-ui/react"

export default function Blog() {
  useEffect(function() {
    document.title = 'Blog | Elvira Firmansyah';
  }, []);
  return (
    <> 
    <Main >
      <Title 
        title="Blog" 
        dp="Some personal opinions on technology and my random thoughts."
      />
      <Divider />
      <VStack spacing="5" py="5" mb={["20"]}>
        <Box bg={useColorModeValue("#F1F2F6",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("#F1F2F6",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("#F1F2F6",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("#F1F2F6",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("#F1F2F6",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("#F1F2F6",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
      </VStack>
    </Main>
    </>
  )
}
import Main from "../../layouts/Main";
import Title from "../../components/Title";
import {
  Box,
  Divider,
  VStack,
  useColorModeValue
} from "@chakra-ui/react"

export default function Blog() {
  return (
    <> 
    <Main >
      <Title 
        title="Blog" 
        dp="Some personal opinions on technology and my random thoughts."
      />
      <Divider />
      <VStack spacing="5" py="5" mb={["20"]}>
        <Box bg={useColorModeValue("gray.100",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("gray.100",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("gray.100",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("gray.100",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("gray.100",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
        <Box bg={useColorModeValue("gray.100",'whiteAlpha.200')} w='100%' p={3}  rounded="sm">
          No Content Here!
        </Box>
      </VStack>
    </Main>
    </>
  )
}
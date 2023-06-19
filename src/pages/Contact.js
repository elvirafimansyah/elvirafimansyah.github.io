import { useEffect } from "react";
import Main from "../layouts/Main";
import Title from "../components/Title";
import {
  Divider,
  Flex,
  VStack,
  Box,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"

import Forms from "../components/Form";

const Contact = () => {
  useEffect(function () {
    document.title = 'Contact | Elvira Firmansyah';
  }, []);
  return (
    <Main>
      <Title
        title="Get In Touch"
        dp="Got a question or proposal, or just want to say hello? Go ahead."
      />
      <Divider />
      <Box my="5" borderRadius="md">
        <Flex
          flexDirection={["column", "column", "row"]}
          color={useColorModeValue("gray.700", "white")}
          h={"full"}
        >
          <VStack
            w="full"
            h="full"
            alignItems={["center", "center", "flex-start"]}
            borderRadius={"md"}
            p={[4, 6, 6, 6]}
            flex="1"
            mb={[5, 5, 0]}
          >
            <VStack spacing={1} alignItems={["center", "center", "flex-start"]} color="white" w="full" h="full">
              <VStack alignItems={["center", "center", "flex-start"]} >
                <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue("green.400", "green.300")} >Contact Information</Text>
                <Text fontSize={"md"} color={useColorModeValue("gray.700", "gray.300")} >Our friendly team would have to hear from you</Text>
                <Divider />
              </VStack>

              <Box py={{ base: 5, sm: 5, md: 8, lg: 5 }}>
                <VStack pl={0} spacing={6} alignItems={"flex-start"}>
                  <Text fontSize="md"  color={useColorModeValue("gray.800", "white")} ><i className="fa-solid fa-envelope fa-lg"></i>&nbsp; freddyfirmansyah25@gmail.com</Text>
                  <Text fontSize="md"  color={useColorModeValue("gray.800", "white")} ><i className="fa-solid fa-location-dot fa-lg"></i>&nbsp; Palembang, Indonesia</Text>
                </VStack>
              </Box>
            </VStack>
          </VStack>

          <Forms />
        </Flex>
      </Box>
    </Main>
  )
};

export default Contact;
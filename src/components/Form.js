import { useState, useRef } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  SimpleGrid,
  GridItem,
  Button,
  Textarea,
  useToast,
  useColorModeValue,
  Box,
  Text
} from '@chakra-ui/react';

const Forms = () => {
  const formRef = useRef(null);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current) })
      .then(response => {
        setLoading(false);
        toast({
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
          render: () => (
            <Box bg="lightgray" _dark={{ bg: "lightdark1", borderColor: "whiteAlpha.200" }} border="1px" borderColor="gray.200" rounded="lg" p={{ base: 3, md: 3 }} display="flex" alignItems="center">
              <i className="fa-solid fa-circle-check" style={{ color: "#14b8a6"}} ></i>&nbsp;
              <Text marginLeft={2}>Thank You! Your message successfully sent!</Text>
            </Box>
          )
        })
        console.log('Success!', response)
      })
      .catch((error) => {
        toast({
          title: 'Something Wrong!',
          description: "Sorry! Your message failed to send!",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top'
        })
        console.error('Error:', error);
      });
  }
  const toast = useToast()
  return (
    <>
      <form ref={formRef} name='contact-my-website' onSubmit={handleSubmit}>
        <VStack w="full" h="full" pl={["0", "0", '5']} alignItems="flex-start" mb="20">
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <FormControl >
                <FormLabel>First Name</FormLabel>
                <Input variant="filled" border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")} bg={useColorModeValue("lightgray", "lightdark1")} focusBorderColor='turquo' type="text" placeholder="Elvira" name="nama" required  />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input variant='filled' border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")} bg={useColorModeValue("lightgray", "lightdark1")} focusBorderColor='turquo' type="text" placeholder="Firmansyah" name="last_name" required />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input variant='filled' border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")} bg={useColorModeValue("lightgray", "lightdark1")}  focusBorderColor='turquo' type="email" placeholder="hello@gmail.com" name="email" required />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormLabel>Messages</FormLabel>
              <Textarea variant='filled' border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")} bg={useColorModeValue("lightgray", "lightdark1")} focusBorderColor='turquo' name="pesan" placeholder='Your Messages' required />
            </GridItem>
            <GridItem colSpan={2}>
              {
                loading ?
                  <Button isLoading loadingText='Loading...' color="turquo" variant='outline' spinnerPlacement='start' w="full" size="lg" _hover={{ bg: "lightdark2", cursor: "default" }}>Submit</Button>
                  :
                  <Button size="lg" fontSize="sm" bgColor={"turquo"} w="full" color="white" type="submit" _hover={{ bg: "turquo" }} _focus={{ boxShadow: "none" }}> Send Messages &nbsp;<i class="fa-solid fa-paper-plane"></i></Button>
              }
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </>
  );
};


export default Forms;
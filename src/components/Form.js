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
} from '@chakra-ui/react';

const Forms = () => {
  const formRef = useRef(null);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true);
    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current)})
    .then(response => {
      setLoading(false);
      toast({
        title: 'Thank You!',
        description: "Your message successfully sent!",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top'
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
        <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input variant='filled' type="text" placeholder="Elvira" name="nama" required />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input variant='filled' type="text" placeholder="Firmansyah" name="last_name" required/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input variant='filled' type="email" placeholder="hello@gmail.com" name="email" required/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormLabel>Messages</FormLabel>
            <Textarea variant='filled' name="pesan"  placeholder='Your Messages' required />
          </GridItem>
          <GridItem colSpan={2}>
            {
              loading ? 
              <Button isLoading loadingText='Loading...' color="green.400"variant='outline' spinnerPlacement='start' w="full" size="lg" _hover={{bg: "whiteAlpha.200", cursor: "default"}}>Submit</Button> 
              : 
              <Button size="lg" bgColor={"green.400"} w="full" color="white" type="submit" _hover={{bg: "green.500"}}> Send Messages</Button>
            }
          </GridItem>
        </SimpleGrid>
      </VStack>
    </form>
    </>
  );
};


export default Forms;
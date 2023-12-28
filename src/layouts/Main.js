import { useEffect } from "react";
import { Container } from "@chakra-ui/react";

const Main = ({children}) => {
  useEffect(function() {
      document.title = 'Home';
    }, []);
  return(
    <>
      <Container maxW="6xl" py={20} >
        {children}
      </Container>
    </>
  )
}


export default Main;
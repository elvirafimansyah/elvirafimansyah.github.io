import {
  Box,  
  Flex,
  Image,
  useColorModeValue
} from "@chakra-ui/react"
const SButton = ({children, ...props}) => {
  return(
    <a
      target="blank"
      href={props.url}
    >
      <Box 
        as="button" 
        border="1px" 
        borderColor={"whiteAlpha.300"} 
        _light={{ borderColor: "gray.300" , color: "gray.700"}} 
        display="flex"
        flexDirection={"row"} 
        color="gray.200" 
        px={5} 
        py={2} 
        rounded="lg"
        alignItems="center"
        _hover={{bg: useColorModeValue("#F1F2F6", "whiteAlpha.50")}}
      >              
        <Box color={props.color}>
          {props.icon} 
        </Box>
        &nbsp;&nbsp;
        {props.name}
      </Box>
    </a>
  )
}

const SGButton = (props) => {
  return(
    <a
      target="blank"
      href={props.url}
    >
      <Box 
        as="button" 
        border="1px" 
        borderColor={"whiteAlpha.300"} 
        _light={{ borderColor: "gray.300" , color: "gray.700"}} 
        display="flex"
        flexDirection={"row"} 
        color="gray.200" 
        px={5} 
        py={2} 
        rounded="md"
        alignItems="center"
        _hover={{ bg: useColorModeValue("#F1F2F6", "whiteAlpha.50") }}
      > 
        <Flex alignItems="center  ">
          <Image 
            src={props.img}
            w={5}
          /> 
          &nbsp;&nbsp;&nbsp;
          {props.name}
        </Flex>
      </Box>
    </a>
  )
}

export { SButton, SGButton }  ;
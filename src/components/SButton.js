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
        borderColor={useColorModeValue("gray.200", "whiteAlpha.200")} 
        display="flex"
        flexDirection={"row"} 
        color={useColorModeValue("gray.700","gray.200")} 
        px={5} 
        py={2} 
        rounded="lg"
        alignItems="center"
        _hover={{bg: useColorModeValue("lightgray", "lightdark1")}}
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
        borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
        display="flex"
        flexDirection={"row"}
        color={useColorModeValue("gray.700", "gray.200")}
        px={5}
        py={2}
        rounded="lg"
        alignItems="center"
        _hover={{ bg: useColorModeValue("lightgray", "lightdark1") }}
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
import {
  Box,
  Text,
  chakra,
  useColorModeValue
} from "@chakra-ui/react"

const Category = (props) => {
  return(
    <Box>
      <Text pt={7} fontSize='lg' fontWeight={"700"}>{props.title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")} fontSize={"sm"} fontWeight="600">{props.description} <a
      target="_blank"
      rel="noreferrer" 
      href={props.url}
      >
        <chakra.span color={useColorModeValue("black", "white")}>on {props.src}</chakra.span>
        </a>
      </Text>
    </Box>
  )
}

export default Category;
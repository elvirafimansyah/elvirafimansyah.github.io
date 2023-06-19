import { 
  Stack,
  Heading,
  useColorModeValue,
  Text,
  chakra,
} from "@chakra-ui/react";

const Title = (props) => {
  return(
    <Stack
      pt={8}
      alignItems="center"
      textAlign={"center"}
      justifyContent="center"
    >
      <Heading color={useColorModeValue("green.400", "green.300")}>{props.title}</Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")} fontWeight={"600"} fontSize={"lg"} pb="5"> 
        {props.dp} <a href={props.url1} target={"blank"}><chakra.span color={useColorModeValue("black", "white")}>{props.status1}</chakra.span></a>
        {props.status2 ? " and " : ''}
        {props.status2 && props.url2 ? <a href={props.url2} target={"blank"}><chakra.span color="black" _dark={{color: "white"}}>{props.status2}</chakra.span></a> : null }
      </Text>
      {props.divider}
    </Stack>
  )
}
export default Title;
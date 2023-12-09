import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const BlogEmpty = () => {
  return (
    <>
      <Stack mt="16" mb={{base: 32, sm: 40}} spacing={7} direction="column" alignItems={"center"} justifyContent={"center"} textAlign="center">
        <i className="fa-solid fa-magnifying-glass fa-2xl" style={{
          color: useColorModeValue("#48BB78", "#68D391")}} ></i>
        <Stack lineHeight="1">
          <Heading fontSize={"25px"} fontWeight={"bold"} >No Results Found</Heading>
          <Text color={useColorModeValue("gray.700", "gray.300")} lineHeight={{base: "1.3", lg: "1"}}>No results match the filter criteria. Remove filter or clear all filters to show results.</Text>
        </Stack>
      </Stack>
    </>
  )
}
export default BlogEmpty;
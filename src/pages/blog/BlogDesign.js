import {
  Box,
  Image,
  Badge,
  Stack,
  Text,
  useColorModeValue,  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const BlogDesign = ({ 
  blog: {
    id,
    title,
    category,
    subCategory,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover,
    estimated}, type}) => {
  return (
    <Box maxW='full' borderWidth='1px' borderRadius='lg' overflow='hidden' key={id} >
      <Box p='6' >
        <Box display='flex' flexWrap={"wrap"} alignItems='baseline' >
          <Badge borderRadius='full' px={3} py={1} mr={2} bg={useColorModeValue("lightgray", "lightdark1")} color={"turquo"} border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")}> 
            {category}
          </Badge>
          <Text fontSize={"15px"}>{createdAt}</Text>
        </Box>
        <Box
          mt='1'
          fontWeight='bold'
          as='h1'
          lineHeight='tight'
          fontSize={"21px"}
          _hover={{ textDecoration: "underline", textDecorationColor: "turquo", textUnderlineOffset: 3 }}
        >
          <Link 
            to={type === "blog" ? `${id}` : `/blog/${id}`}
          >
            {title}
          </Link>
        </Box>
        <Box color="gray.300" _light={{ color: "gray.700" }} as="div" noOfLines={3} textOverflow="ellipsis" >{description}</Box>
        <Stack  mt={2} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"}>
            <Image borderRadius='full' boxSize='35px' src={authorAvatar} alt='Elvira Firmansyah' />
            <Link to="/about"><Text>{authorName}</Text></Link>
          </Stack>
          <Text color={"turquo"} >{estimated} read</Text>
        </Stack>
      </Box>
    </Box>
  )
}
export default BlogDesign;
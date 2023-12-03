import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Data";
import { useState } from "react";
import {
  Divider,
  Text,
  VStack,
  Container,
  Box,
  useColorModeValue,
  Button,
  Badge,
  Stack,
  Image,
  Heading
} from "@chakra-ui/react"
import { Link } from "react-router-dom";

export default function BlogItem() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(function () {
    document.title = 'Blog | Elvira Firmansyah';
    let blog = blogData.find((blog) => blog.id === parseInt(id))
    if (blog) {
      setBlog(blog)
    }
  }, [id,blog]);
  /* Structure
  - category
  - title
  - author and author avatar
  - date
  - picture
  - content

  - author profile
  
  */
  return (
    <>
      <Container maxW="container.md" py={20} >
        <Link to="/blog">
          <Button mt={3} color={useColorModeValue("gray.700", "white")} bg={useColorModeValue("#F1F2F6", "whiteAlpha.200")} _hover={{ bg: useColorModeValue("gray.200", "whiteAlpha.100")}} _focus={{ boxShadow: "none" }} rounded="lg"> <i class="fa-solid fa-arrow-left"></i>&nbsp; Back </Button>
        </Link>
        {
          blog ? 
          <Box>
            <Box display='flex' mt={5} flexWrap={"wrap"} alignItems='baseline' >
              <Badge borderRadius='full' px={3} py={1} mr={2} mb={2} color="green.400" bg="#F1F2F6" _dark={{bg: "whiteAlpha.200", color: "green.300"}}>
                {blog.category}
              </Badge>
              {blog.subCategory.map((category) => (
                <Badge borderRadius='full' px={3} py={1} mr={2} mb={2} bg="#F1F2F6" _dark={{ bg: "whiteAlpha.200" }} >
                  {category}
                </Badge>
              ))}
            </Box>
            <Heading size="xl"> {blog.title}</Heading>

            <Stack my={4}  direction={"row"} alignItems={"center"}>
              <Image borderRadius='full' boxSize='40px'src='/assets/img/profile.png' alt='Elvira Firmansyah' />
              <Stack lineHeight={1}>
                <Link to="/about"><Text fontSize={"17px"} fontWeight={400}>{blog.authorName}</Text></Link>
                <Stack direction={"row"} color="gray.700" _dark={{ color: "gray.300" }}>
                  <Text fontSize={"14px"} >{blog.estimated} read</Text>
                  <Text>•</Text>
                  <Text fontSize={"14px"}>{blog.createdAt}</Text>
                </Stack>
              </Stack>
            </Stack>

            <Divider />

            <Stack my={5} mb={28}>
              <Image width="full" src={blog.cover} alt={blog.authorName}></Image>
              <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: https://fastwork.id/</Text>

              <Stack direction="column" spacing={5} pt="5">
                <Text color={"gray.700"} _dark={{color: "gray.300"}}>{blog.description}</Text>

                <Stack spacing={3}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[0]}</Heading>
                  {blog.subImg[0] !== "" ? <Image src={blog.subImg[0]} width="full" /> : null}
                  <Text color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[0] ? blog.subDesc[0] : null}</Text>
                </Stack>

                <Stack spacing={3}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[1]}</Heading>
                  {blog.subImg[1] !== "" ? <Image src={blog.subImg[1]} width="full" /> : null}
                  <Text color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[1]? blog.subDesc[1] : null}</Text>
                </Stack>

              </Stack>
            </Stack>
          </Box>
          : ""
        }
      </Container>
    </>
  )
}
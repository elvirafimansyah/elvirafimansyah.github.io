import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Data";
import { useState } from "react";
import {
  Divider,
  Text,
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

  return (
    <>
      <Container maxW="container.md" py={20} >
        <Link to="/blog">
          <Button mt={3} color={useColorModeValue("gray.700", "white")} bg={useColorModeValue("lightgray", "lightdark1")} _hover={{ bg: useColorModeValue("gray.200", "lightdark2") }} _focus={{ boxShadow: "none" }} rounded="lg" border="1px" borderColor={useColorModeValue("gray.200", "lightdark2")}> <i class="fa-solid fa-arrow-left"></i>&nbsp; Back </Button>
        </Link>
        {
          blog ? 
          <Box>
            <Box display='flex' mt={5} flexWrap={"wrap"} alignItems='baseline' >
                <Badge borderRadius='full' px={3} py={1} mr={2} mb={2} color="turquo" border="1px" borderColor={"gray.200"} bg="lightgray" _dark={{bg: "lightdark1", borderColor: "lightdark2"}}>
                {blog.category}
              </Badge>
              {blog.subCategory.map((category) => (
                <Badge borderRadius='full' px={3} py={1} mr={2} mb={2} bg="lightgray" border="1px" borderColor="gray.200" _dark={{ bg: "lightdark1", borderColor: "lightdark2" }} >
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
              <Image width="full" src={blog.cover} rounded="md" alt={blog.authorName}></Image>
              <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[0]}</Text>

              <Stack direction="column" spacing={5} pt="5">
                <Text color={"gray.700"} _dark={{color: "gray.300"}}>{blog.description !== "" ? blog.description : null}</Text>

            
                <Stack spacing={blog.subTitle[0] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[0] !== "" ? blog.subTitle[0] : null }</Heading>
                  {blog.subImg[0] !== "" ? 
                    <Stack>
                      <Image src={blog.subImg[0]} rounded="md" width="full" />
                      {blog.sourceImg[1] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[1]}</Text> : null}
                    </Stack>
                  : null}
                  <Text color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[0] ? blog.subDesc[0] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[1] !== "" ? 3 : null}>
                    <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[1] !== "" ? blog.subTitle[1] : null}</Heading>
                    {blog.subImg[1] !== "" ? 
                    <Stack direction="column">
                      <Image src={blog.subImg[1]} rounded="md" width="full" />
                      {blog.sourceImg[2] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[2]}</Text> : null}
                    </Stack> 
                    : null}
                  <Text color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[1]? blog.subDesc[1] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[2] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[2] !== "" ? blog.subTitle[2] : null}</Heading>
                  {blog.subImg[2] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[2]} rounded="md" width="full" />
                      {blog.sourceImg[3] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[3]}</Text> : null}
                    </Stack>
                    : null}
                  <Text color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[2] ? blog.subDesc[2] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[3] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[3] !== "" ? blog.subTitle[3] : null}</Heading>
                  {blog.subImg[3] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[3]} rounded="md" width="full" />
                      {blog.sourceImg[4] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[4]}</Text> : null}
                  
                    </Stack>
                    : null}
                  <Text color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[3] ? blog.subDesc[3] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[4] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[4] !== "" ? blog.subTitle[4] : null}</Heading>
                  {blog.subImg[4] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[4]} rounded="md" width="full" />
                      {blog.sourceImg[5] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[5]}</Text> : null}
                      
                    </Stack>
                    : null}
                  <Text fontWeight="400" color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[4] ? blog.subDesc[4] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[5] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[5] !== "" ? blog.subTitle[5] : null}</Heading>
                  {blog.subImg[5] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[5]} rounded="md" width="full" />
                      {blog.sourceImg[6] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[6]}</Text> : null}
                      
                    </Stack>
                    : null}
                  <Text fontWeight="400" color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[5] ? blog.subDesc[5] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[6] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[6] !== "" ? blog.subTitle[6] : null }</Heading>
                  {blog.subImg[6] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[6]} rounded="md" width="full" />
                      {blog.sourceImg[7] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[7]}</Text> : null}
                      
                    </Stack>
                    : null}
                  <Text fontWeight="400" color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[6] ? blog.subDesc[6] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[7] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[7] !== "" ? blog.subTitle[7] : null}</Heading>
                  {blog.subImg[7] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[7]} rounded="md" width="full" />
                      {blog.sourceImg[8] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[8]}</Text> : null}
                    </Stack>
                    : null}
                  <Text fontWeight="400" color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[7] ? blog.subDesc[7] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[8] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[8] !== "" ? blog.subTitle[8] : null}</Heading>
                  {blog.subImg[8] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[8]} rounded="md" width="full" />
                      {blog.sourceImg[9] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[9]}</Text> : null}
                    </Stack>
                    : null}
                  <Text fontWeight="400" color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[8] ? blog.subDesc[8] : null}</Text>
                </Stack>

                <Stack spacing={blog.subTitle[9] !== "" ? 3 : null}>
                  <Heading fontSize={"25px"} fontWeight={"bold"} >{blog.subTitle[9] !== "" ? blog.subTitle[9] : null}</Heading>
                  {blog.subImg[9] !== "" ?
                    <Stack direction="column">
                      <Image src={blog.subImg[9]} rounded="md" width="full" />
                      {blog.sourceImg[10] !== "" ? <Text textAlign="right" fontSize={"14px"} color={"gray.700"} _dark={{ color: "white" }} fontWeight={"500"} >Source: {blog.sourceImg[10]}</Text> : null}
                    </Stack>
                    : null}
                  <Text fontWeight="400" color={"gray.700"} _dark={{ color: "gray.300" }}>{blog.subDesc[9] ? blog.subDesc[9] : null}</Text>
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
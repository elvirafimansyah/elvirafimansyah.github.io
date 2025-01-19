import {useEffect, useState} from "react"
import { 
  Stack, 
  Heading,
} from "@chakra-ui/react";
import { blogData } from "./Data";
import BlogDesign from "./BlogDesign";
import BlogEmpty from "./Empty";
const LatestBlog = () => {
  const [blogs, setBlogs] = useState(blogData);

  useEffect(() => {
    setBlogs(blogs.slice(0,3))
  }, [blogs])

  return (
    <Stack mt={[24, 24, 0]} mb={20} spacing={5}>
      <Heading size="lg" fontWeight="semibold">Latest Blogs</Heading>
      <Stack
        direction={"column"}
        spacing={5}
      >
        {!blogs.length ? <BlogEmpty /> : 
          blogs.map((blog) => (
            <BlogDesign blog={blog} type="latest" />
          ))
        }
      </Stack>
      
    </Stack>
  );
};

export default LatestBlog;
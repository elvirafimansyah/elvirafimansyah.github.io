import {
  Stack
} from "@chakra-ui/react";
import BlogDesign from "./BlogDesign";


const BlogList = ({ blogs }) => {
  return (
    <Stack
      direction={"column"}
      spacing={5}
      pt={7}
      pb={{base: 0, md: 24}}
      mb={[0, 30]}
    >
      {blogs.map((blog) => (
        <BlogDesign blog={blog} />
      ))}
    </Stack>
  )
}
export default BlogList;
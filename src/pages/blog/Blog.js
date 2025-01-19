import { useEffect, useState } from "react";
import Main from "../../layouts/Main";
import Title from "../../components/Title";
import SearchBar from "../../components/SearchBar";
import { blogData } from "./Data";
import BlogList from "./BlogList";
import BlogEmpty from "./Empty";

import {
  Divider,
} from "@chakra-ui/react"

export default function Blog() {
  useEffect(function() {
    document.title = 'Blog  | Elvira Firmansyah';
  }, []);

  const [blogs, setBlogs] = useState(blogData);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults()
  }

  const handleSearchResults = () => {
    const allBlogs = blogData;
    const filteredBlogs = allBlogs.filter((blog) => 
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()) || blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    )

    setBlogs(filteredBlogs)
  }

  return (
    <> 
    <Main >
      <Title 
        title="Blog" 
        dp="Some personal opinions on technology and my random thoughts."
      />
      <Divider />

      <SearchBar value={searchKey} handleArticle={handleSearchBar} handleSearchKey={(e) => setSearchKey(e.target.value)} />

      {!blogs.length ? <BlogEmpty /> : <BlogList blogs={blogs} />}
    </Main>
    </>
  )
}
"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/container";
import { getAllPosts } from "../../lib/posts";
import Link from "next/link"
import { Dot } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NotFound from "@/components/notfound";
import { Skeleton } from "@/components/ui/skeleton";
interface blogData {
  title: string;
  content: string;
  slug: string;
  description?: string;
  category?: string;
  subCategory?: string[];
  createdAt?: string;
  authorName?: string;
  estimated?: string;
  cover?: string;
}

const Blog = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState<blogData[]>();
  const [loading, setLoading] = useState(true);

  const tanggalSort = (tanggal: string): Date => {
    const date = tanggal.split(", ");
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    return dateObject;
  }

  const convertTanggal = (tanggal: string) => {
    const date = tanggal.split(", ")
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    const day = dateObject.toLocaleString("en-US", { day: 'numeric' });
    const month = dateObject.toLocaleString("en-US", { month: 'long' });
    const year = dateObject.getFullYear();

    const fullDate = `${month} ${day}, ${year}`;

    return fullDate;
  }

  useEffect(() => {
    document.title = "Blog | Elvira Firmansyah"
    const fetchData = async () => {
      try {
        const posts = await getAllPosts();
        const sortedData: blogData[] = posts?.sort((a, b) => tanggalSort(b.createdAt ? b.createdAt : '').getTime() - tanggalSort(a.createdAt ? a.createdAt : '').getTime());
        setPosts(sortedData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      }
    }

    fetchData();
  }, [])

  const getSearchValue = (searchValue: string) => {
    setInput(searchValue);
  }

  const filterData = async () => {
    const posts = await getAllPosts();
    const filteredData = posts?.filter((blog) => {
      const titleMatch = typeof blog.title === 'string' && blog.title.toLowerCase().includes(input.toLowerCase());
      const descriptionMatch = typeof blog.description === 'string' && blog.description.toLowerCase().includes(input.toLowerCase());

      return titleMatch || descriptionMatch;
    })

    setPosts(filteredData);
  }

  const loading_card = [...Array(1)]

  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section id="blog" className="py-28 overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2 text-center">
              <h1 className="font-bold text-4xl lg:text-title2 tracking-title text-primary">Blog</h1>
              <p className="text-desc text-lg tracking-desc font-normal pb-3">Some personal opinions on technology and my random thoughts.</p>
              <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark " />
            </div>
            <form className="flex w-full items-center space-x-3 pl-[1px] pt-4 pb-6" onSubmit={(e) => { e.preventDefault(); filterData() }} >
              <Input type="text" placeholder="Search..." onChange={(e) => getSearchValue(e.target.value)} />
              <Button variant="primary" type="submit" onClick={() => filterData()}>Search</Button>
            </form>
            {loading ? loading_card.map((_, key) => (
              <>
                <Skeleton key={key} className="border cursor-pointer border-bordersoft bg-soft hover:bg-hoversoft rounded-xl w-full h-[240px]" />
              </>
            )) :
              !posts?.length ? <NotFound
                title="No Results Found"
                description="No results match the filter criteria. Remove filter or clear all filters to show results."
                size="2xl"
                size_md="3xl"
              /> :
                <div className="grid grid-cols-1 gap-6 ">
                  {
                    posts?.map((_, key) => (
                      <div key={key} className="border border-bordersoft dark:bg-soft flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0  dark:shadow-none">
                        <div className="space-y-3" >
                          <div className="space-y-2">
                            <Badge variant="primary">{_.category}</Badge>
                            <div className="space-y-1">
                              <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis "><Link href={`/blog/${_.slug}`}>{_.title}</Link></h2>
                              <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base ">{_.description}</p>
                            </div>
                          </div>
                          <div >
                            <div className="flex items-center text-sm md:text-base" >
                              <div className="flex items-center space-x-3">
                                <Image
                                  src={'/assets/img/profile.png'}
                                  alt={'profile'}
                                  width={1200}
                                  height={800}
                                  className="rounded-full w-9 h-9 object-cover "
                                />
                                <p>{_.authorName}</p>
                              </div>
                              <Dot />
                              <p>{_.createdAt ? convertTanggal(_.createdAt) : ''}</p>
                            </div>
                          </div>
                          <div className="absolute text-xs md:text-sm right-6 bottom-6 text-desc">{_.estimated}</div>
                        </div>
                      </div>
                    ))
                  }

                </div>
            }
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Blog;
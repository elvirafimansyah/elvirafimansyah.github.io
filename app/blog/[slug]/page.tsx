import Container from "@/components/container";
import Image from "next/image";
import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import NotFound from "../../not-found";
import MarkdownRenderer from "@/components/markdown-renderer";
import Link from "next/link";

interface PostProps {
  params: { slug: string };
}
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetail({ params }: PostProps) {
  const post = await getPostBySlug(params.slug);
 
  if (!post) {
    return <NotFound />
  }

  const convertTanggal = (tanggal: string) => {
    const date = tanggal.split(", ")
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    const day = dateObject.toLocaleString("en-US", {day: 'numeric'});
    const month = dateObject.toLocaleString("en-US", {month: 'long'});
    const year = dateObject.getFullYear();

    const fullDate = `${month} ${day}, ${year}`;

    return fullDate;
  }
  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <div className="mx-auto px-6 sm:px-8 md:px-[5%] lg:px-[20%] xl:px-[25%] ">
        <section id="blogdetail" className="py-24 lg:py-28  overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="flex flex-col space-y-4 mt-3 md:mt-4 ">
              <div className="flex overflow-x-auto ">
                <Badge variant="primary">{post.category}</Badge>
                {post.subCategory?.map((cat, idx) => <Badge variant="secondary" key={idx}>{cat}</Badge>)}
              </div>

              <h1 className="text-[28px] sm:text-3xl font-bold leading-[1.3]" style={{lineHeight : "1.3"}}>{post.title}</h1>
              <div className="flex items-center text-sm md:text-base" >
                <p>Oleh: <Link href="/about" className="hover:underline decoration-primary decoration-2 underline-offset-[3px] text-foreground font-semibold">{post.authorName}</Link></p>
                <Dot />
                <p>{convertTanggal(post.createdAt? post.createdAt : '')}</p>
              </div>
              <Image
                src={post.cover ? post.cover : ''}
                width={1700}
                height={800}
                alt={post.category ? post.category : "hmm"}
                className="w-full md:w-full object-cover rounded-lg object-center"
              />
              <div className="flex flex-col space-y-1">
                <article>
                  <MarkdownRenderer content={post.content} />
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

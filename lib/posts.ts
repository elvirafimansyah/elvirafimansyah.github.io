'use server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
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
// Get all posts
export async function getAllPosts() : Promise<blogData[]> {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      subCategory: data.subCategory || [],
      createdAt: data.createdAt || '',
      authorName: data.authorName || '',
      estimated: data.estimated || '',
      cover: data.cover || '',

    };
  });
}


// Get single post by slug
export async function getPostBySlug(slug: string) : Promise<blogData> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || '',
    description: data.description || '',
    category: data.category || '',
    subCategory: data.subCategory || [],
    createdAt: data.createdAt || '',
    authorName: data.authorName || '',
    estimated: data.estimated || '',
    cover: data.cover || '',
  };
}
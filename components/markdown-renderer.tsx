import ReactMarkdown from 'react-markdown';
import React from 'react';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';

const MarkdownComponents : {[key: string]: React.FC<{children: React.ReactNode; src?: string; alt?: string;}>} = {
  h1: ({ children } : { children: React.ReactNode }) => (
    <h1 className='text-4xl font-bold my-4'>{children}</h1>
  ),
  h2: ({ children } : { children: React.ReactNode }) => (
    <h2 className='text-3xl font-semibold my-3'>{children}</h2>
  ),
  h3: ({ children } : { children: React.ReactNode }) => (
    <h3 className='text-2xl sm:text-[28px] font-semibold mt-5 mb-2 '>{children}</h3>
  ),
  p: ({ children } : { children: React.ReactNode }) => (
    <p className='text-base sm:text-lg font-medium tracking-desc text-desc mb-2'>{children}</p>
  ),
  span: ({ children }: { children: React.ReactNode }) => (
    <span className="text-foreground justify-end flex mb-2 text-base">{children}</span>
  ),
  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <Image
        src={src}
        alt={alt || 'Image'}
        width={1200} 
        height={800} 
        className="rounded-lg object-cover my-4"
        layout="responsive" 
      />
    );
  },
}

const MarkdownRenderer = ({ content } : {content : string}) => {
  return (
    <ReactMarkdown components={MarkdownComponents} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
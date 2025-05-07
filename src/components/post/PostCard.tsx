import React from 'react';
import { Post } from '@/types/postType';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link aria-labelledby={`post-title-${post.slug}`} href={`/posts/${post.category}/${post.slug}`}>
      <article className="h-70 flex flex-col items-center overflow-hidden rounded-md border border-gray-300 shadow-md hover:scale-105">
        <div className="relative h-40 w-full">
          <Image
            src={`/images/posts/${post.category}/${post.slug}/${post.thumbnailImage}`}
            alt="게시글 이미지"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="rounded object-cover"
          />
        </div>
        <div className="flex w-full items-center justify-between p-2">
          <span className="rounded-full bg-yellow-300 px-2 py-1 text-sm">{post.category}</span>
          <time className="text-sm text-gray-500">{post.date}</time>
        </div>
        <div className="my-4 flex w-full flex-col items-center justify-center p-2 text-center text-lg">
          <h2 id={`post-title-${post.slug}`} className="line-clamp-1 font-title font-bold">
            {post.title}
          </h2>
          <p className="line-clamp-1 text-sm text-gray-500">{post.subtitle}</p>
        </div>
      </article>
    </Link>
  );
}

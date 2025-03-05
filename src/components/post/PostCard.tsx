import React from "react";
import { Post } from "@/types/postType";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.category}/${post.slug}`}>
      <article className="border border-gray-300 rounded-md flex flex-col items-center h-80 overflow-hidden shadow-md hover:scale-105">
        <div className="relative w-full h-40">
          <Image
            src={`/images/posts/${post.category}/${post.slug}/${post.thumbnailImage}`}
            alt="게시글 이미지"
            layout="fill"
            objectFit="cover"
            className="mb-1 rounded"
          />
        </div>
        <div className="flex justify-between items-center p-2 w-full">
          <span className="py-1 px-2 bg-yellow-300 rounded-full text-sm">
            {post.category}
          </span>
          <time className="text-sm text-gray-500">{post.date}</time>
        </div>
        <div className="text-center w-full p-2 flex flex-col items-center justify-center flex-1 text-lg">
          <h1 className="font-bold font-title line-clamp-2">{post.title}</h1>
          <p className="text-sm line-clamp-2 text-gray-500">{post.subtitle}</p>
        </div>
      </article>
    </Link>
  );
}

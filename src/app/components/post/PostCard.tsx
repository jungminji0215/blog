import React from "react";
import { Post } from "@/types/postType";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const imageUrl = `/images/posts/${post.category}/${post.slug}/${post.thumbnailImage}`;

  return (
    <Link href={`/posts/${post.title}`}>
      <article className="border border-gray-300 rounded-md flex flex-col items-center h-72 overflow-hidden shadow-md hover:scale-105">
        <div className="relative w-full h-40">
          <Image
            src={imageUrl}
            alt="게시글 이미지"
            layout="fill" // 부모 요소에 맞게 채움
            objectFit="cover" // 비율을 유지하면서 꽉 채움
            className="mb-1 rounded"
          />
        </div>
        <div className="flex justify-between items-center p-2 w-full">
          <span className="border py-1 px-2 bg-green-300 rounded-2xl">{post.category}</span>
          <time className="text-sm text-gray-500">{post.date}</time>
        </div>
        <div className="text-center w-full p-2 flex items-center justify-center flex-1 text-lg">
          <h1 className="font-bold truncate">{post.title}</h1>
        </div>
      </article>
    </Link>
  );
}

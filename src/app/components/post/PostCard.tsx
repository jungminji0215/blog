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
      <div className="border border-black flex flex-col items-center">
        <Image src={imageUrl} alt="게시글 이미지" width={300} height={200} className="mb-1" />
        <time className="text-sm text-gray-500">{post.date}</time>
        <span>{post.category}</span>
        <h1>{post.title}</h1>
      </div>
    </Link>
  );
}

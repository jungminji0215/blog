import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/types/postType";

type Props = {
  posts: Post[];
};

export default function PostItems({ posts }: Props) {
  return (
    <ul className="flex gap-5">
      {posts?.map((post) => {
        return (
          <li key={post.title}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}

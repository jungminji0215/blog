import React from "react";
import PostCard from "./PostCard";

export default function PostItems() {
  return (
    <ul className="flex gap-5">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ul>
  );
}

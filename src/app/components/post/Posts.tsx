import React from "react";
import PostCard from "./PostCard";

export default function Posts() {
  return (
    <ul className="flex gap-5">
      <PostCard />
      <PostCard />
    </ul>
  );
}

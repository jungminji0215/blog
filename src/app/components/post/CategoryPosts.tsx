"use client";

import React, { useState } from "react";
import Categories from "../Categories";
import PostItems from "./PostItems";
import { Post } from "@/types/postType";

type Props = {
  posts: Post[];
  categories: string[];
};

const DEFAULT_CATEGORY = "전체";

export default function CategoryPosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState<string>(DEFAULT_CATEGORY);

  const filteredPosts = selected === DEFAULT_CATEGORY ? posts : posts.filter((post) => post.category === selected);

  return (
    <section className="max-w-screen-xl m-auto p-5">
      <Categories categories={[DEFAULT_CATEGORY, ...categories]} selected={selected} onClick={setSelected} />
      <h2 className="text-xl font-bold my-3">{selected}</h2>
      <PostItems posts={filteredPosts} />
    </section>
  );
}

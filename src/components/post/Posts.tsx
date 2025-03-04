export const dynamic = "force-dynamic";
import React from "react";
import { postApi } from "@/service/posts";
import CategoryPosts from "./FilteredPosts";

export default async function Posts() {
  const categories = await postApi.getCategory();
  const posts = await postApi.getAllPosts();

  return <CategoryPosts posts={posts} categories={categories} />;
}

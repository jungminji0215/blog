import React from "react";
import PostItems from "./PostItems";
import { postApi } from "@/service/posts";

export default async function Posts() {
  const posts = await postApi.getAllPosts();

  return (
    <section className="max-w-screen-xl m-auto p-5">
      <ul className="text-xl font-bold my-3 flex gap-5 justify-center">
        <li className="rounded-2xl border border-red-500 p-1">전체</li>
        <li className="rounded-2xl border border-red-500 p-1">자바스크립트</li>
        <li className="rounded-2xl border border-red-500 p-1">리액트</li>
        <li className="rounded-2xl border border-red-500 p-1">넥스트</li>
        <li className="rounded-2xl border border-red-500 p-1">프로젝트</li>
      </ul>
      <h2 className="text-xl font-bold my-3">전체</h2>
      <PostItems posts={posts} />
    </section>
  );
}

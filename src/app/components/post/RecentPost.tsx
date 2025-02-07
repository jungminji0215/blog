import { postApi } from "@/service/posts";
import React from "react";
import PostItems from "./PostItems";

export default async function RecentPost() {
  const posts = await postApi.getRecentPosts();
  console.log("posts :>> ", posts);

  return (
    // TODO max-w-screen-xl m-auto p-5 공통으로 사용할 수 있도록
    <section className="max-w-screen-xl m-auto p-5">
      <h2 className="text-xl font-bold my-3">최신글</h2>
      <PostItems posts={posts} />
    </section>
  );
}

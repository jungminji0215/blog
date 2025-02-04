import Image from "next/image";
import React from "react";
import Posts from "./Posts";

export default function RecentPost() {
  return (
    // TODO max-w-screen-xl m-auto p-5 공통으로 사용할 수 있도록
    <section className="max-w-screen-xl m-auto p-5">
      <h3 className="text-xl font-bold my-3">최신글</h3>
      <Posts />
    </section>
  );
}

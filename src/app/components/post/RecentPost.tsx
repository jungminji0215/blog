import React from "react";
import Posts from "./PostItems";

export default function RecentPost() {
  // 1. 모든 포스트 데이터를 읽어와야 함
  // 2. 모든 포스트 데이터를 보여줌
  return (
    // TODO max-w-screen-xl m-auto p-5 공통으로 사용할 수 있도록
    <section className="max-w-screen-xl m-auto p-5">
      <h3 className="text-xl font-bold my-3">최신글</h3>
      <Posts />
    </section>
  );
}

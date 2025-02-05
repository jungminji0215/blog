import Image from "next/image";
import React from "react";
import postImage from "../../../../public/minji.jpeg";

export default function PostCard() {
  return (
    <li className="border border-black w-72 h-64 flex flex-col items-center">
      <Image src={postImage} alt="게시글 이미지" width={200} height={200} className="mb-1" />
      <p className="text-sm text-gray-500">2025.2.15</p>
      <h1>자바스크립트 문법 총정리</h1>
      <span>Jsvascript</span>
    </li>
  );
}

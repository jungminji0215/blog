import Image from "next/image";
import React from "react";
import profileImage from "../../../public/minji.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-5 p-5 max-w-screen-xl m-auto">
      <Image
        src={profileImage}
        alt="프로필 사진"
        width={200}
        height={200}
        priority
        className="border border-gray-300 rounded-full"
      />
      <div className="flex flex-col justify-center">
        <p>안녕하세요 👋🏻</p>
        <p>공부한 내용을 기록합니다 ✏️</p>
        <Link href="/">
          <button className="text-sm mt-3 bg-yellow-500 rounded-xl py-1 px-4">저의 사이트에 놀러오세요</button>
        </Link>
      </div>
    </section>
  );
}

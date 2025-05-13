import Image from 'next/image';
import React from 'react';

const PROFILE_IMG_SIZE = 200;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-info"
      className="m-auto flex max-w-6xl flex-col items-center justify-center gap-5 p-5 md:flex-row"
    >
      <figure>
        <Image
          priority={true}
          src="/hero.webp"
          alt="정민지 이미지"
          width={PROFILE_IMG_SIZE}
          height={PROFILE_IMG_SIZE}
          className="rounded-full"
        />
      </figure>
      <div className="hidden justify-center md:flex md:flex-col">
        <h1 id="hero-info" className="text-xl font-bold">
          안녕하세요 <span aria-hidden="true">👋🏻</span>
        </h1>

        <p className="mt-1 font-bold">
          공부한 내용을 기록합니다 <span aria-hidden="true">✏️</span>
        </p>
      </div>
    </section>
  );
}

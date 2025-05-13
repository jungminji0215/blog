'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type Props = {
  categories: string[];
  selected: string; // TODO 필요없음
};

export default function Categories({ categories }: Props) {
  const param = useParams();
  const currentCategory = param.category ? param.category[0] : 'all';

  return (
    <ul className="my-3 flex justify-center gap-5 text-xl font-bold">
      <li
        className={`cursor-pointer rounded-full px-2 py-1 hover:scale-110 ${
          currentCategory === 'all' ? 'bg-yellow-400' : 'bg-gray-100'
        } `}
      >
        <Link href="/posts">all</Link>
      </li>

      {categories?.map((category) => {
        return (
          <li
            key={category}
            className={`cursor-pointer rounded-full px-2 py-1 hover:scale-110 ${
              currentCategory === category ? 'bg-yellow-400' : 'bg-gray-100'
            } `}
          >
            <Link href={`/posts/${category}`}>{category}</Link>
          </li>
        );
      })}
    </ul>
  );
}

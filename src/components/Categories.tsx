"use client";

import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="text-xl font-bold my-3 flex gap-5 justify-center">
      {categories?.map((category) => {
        return (
          <li
            key={category}
            className={`py-1 px-2  rounded-full hover:scale-110 cursor-pointer ${
              selected === category ? "bg-yellow-400" : "bg-gray-100"
            } `}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
}

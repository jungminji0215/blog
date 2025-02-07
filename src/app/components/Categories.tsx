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
            className={`border py-1 px-2  rounded-2xl hover:scale-110 cursor-pointer ${
              selected === category ? "bg-green-500" : "bg-green-200"
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

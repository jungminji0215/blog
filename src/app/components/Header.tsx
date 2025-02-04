import Link from "next/link";
import React from "react";
import { ROUTES } from "../constants/routes";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-gray-200">
      <nav className="bg-red-300 max-w-screen-xl m-auto p-4 flex justify-between">
        <div>
          <Link href={ROUTES.HOME}>
            <h1 className="font-bold text-3xl">{`Minji's Devlog`}</h1>
          </Link>
        </div>
        <div className="flex gap-3 items-center font-bold text-2xl">
          <MdOutlineDarkMode />
          <Link href={ROUTES.HOME}>Home</Link>
          <Link href={ROUTES.POSTS}>Posts</Link>
        </div>
      </nav>
    </header>
  );
}

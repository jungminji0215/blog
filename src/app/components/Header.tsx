import Link from "next/link";
import React from "react";
import { ROUTES } from "../constants/routes";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-gray-200">
      <nav className="bg-red-300 max-w-screen-xl m-auto p-4">
        <ul className="flex justify-between">
          <li>
            <Link href={ROUTES.HOME} className="font-bold text-2xl">{`Minji's Devlog`}</Link>
          </li>
          <div className="flex gap-3 items-center font-bold text-xl">
            <li>
              <MdOutlineDarkMode />
            </li>
            <li>
              <Link href={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link href={ROUTES.POSTS}>Posts</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

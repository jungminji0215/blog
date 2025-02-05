import Link from "next/link";
import React from "react";
import { ROUTES } from "../constants/routes";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <nav className="max-w-screen-xl m-auto p-4 flex justify-between border-b border-gray-200">
        <div>
          <Link href={ROUTES.HOME}>
            <h1 className="font-bold text-3xl">{`Minji's Devlog`}</h1>
          </Link>
        </div>
        <div className="flex gap-3 items-center font-bold text-2xl">
          <MdOutlineDarkMode />
          {/* <Link href={ROUTES.HOME}>Home</Link> */}
        </div>
      </nav>
    </header>
  );
}

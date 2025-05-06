import Link from 'next/link';
import React from 'react';
import { ROUTES } from '@/constants/routes';

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav aria-label="주요 탐색" className="m-auto flex max-w-6xl justify-between p-4">
        <div>
          <h1 className="font-title text-3xl">
            <Link href={ROUTES.HOME}>Minji’s Devlog</Link>
          </h1>
        </div>
        <div className="flex items-center gap-3 text-2xl font-bold">
          {/* <MdOutlineDarkMode /> */}
          {/* <Link href={ROUTES.HOME}>Home</Link> */}
        </div>
      </nav>
    </header>
  );
}

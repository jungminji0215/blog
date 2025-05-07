import React, { ReactNode } from 'react';

import Hero from '@/components/Hero';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}

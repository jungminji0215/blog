import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        title: ['DWImpactamin', 'sans-serif'],
        content: ['GowunDodum-Regular', 'sans-serif'],
        category: ['GowunDodum-Regular', 'sans-serif'],
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

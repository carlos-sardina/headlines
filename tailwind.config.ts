import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      main: '#239c97',
      black: '#101725',
      gray: '#9299a4',
      transparent: 'transparent'
    }
  }
};
export default config;

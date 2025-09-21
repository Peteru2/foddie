  import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
      'public':'#E63946',
      'private':'#2D2D2D',
      'secondary':'#FAF3E0',
      'accent':'#800020',

    },
    
    },
    // fontFamily: {
    //     sans: ['Inter', 'system-ui', 'sans-serif'],
    //     mono: ['JetBrains Mono', 'monospace']
    //   },
    //   fontSize: {
    //     'xs': '12px',
    //     'sm': '14px',
    //     'base': '16px',
    //     'lg': '18px',
    //     'xl': '20px',
    //     '2xl': '24px',
    //     '3xl': '32px',
    //   }
  },
  plugins: [],
};
export default config;


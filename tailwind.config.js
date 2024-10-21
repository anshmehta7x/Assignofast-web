/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "black",
        borderGreen: "#358D08",
        lightGreen: "#BFEF4B",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

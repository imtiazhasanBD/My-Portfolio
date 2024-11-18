/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        customGradient: "linear-gradient(to right, #4338ca, #a855f7 )", // Indigo to Purple
      },
      colors: {
        customBlue: '#4458dc',
      },
    },
  },
  plugins: [],
};

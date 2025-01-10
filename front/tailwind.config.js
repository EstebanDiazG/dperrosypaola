/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "0%, 100%": { transform: "translateY(25)" },
          "50%": { transform: "translateY(17px)" }, // Ajusta la altura del "salto"
        },
      },
      animation: {
        customBounce: "customBounce 3s ease-in-out infinite", // Ajusta duración y tipo de repetición
      },
    },
  },
  plugins: [],
};

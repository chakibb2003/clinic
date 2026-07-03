/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary: "#1E88E5",
        background: "#F8FAFC",
        cards: "#FFFFFF",
        accent: "#EAF2FF",
        textMain: "#1E293B",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
        ibm: ["'IBM Plex Sans Arabic'", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(13, 110, 253, 0.15)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      }
    },
  },
  plugins: [],
}

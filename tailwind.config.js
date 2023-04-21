/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      "intro": ["250px", {
        lineHeight: "220px",
        letterSpacing: "10px"
      }]
    },
    extend: {
      backgroundImage: {
        intro: "url('https://cdn.discordapp.com/attachments/896756725833678928/1098821235074404455/Rectangle_7.png')",
      }
    },
  },
  plugins: [],
}

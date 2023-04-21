/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        intro: "url('https://cdn.discordapp.com/attachments/896756725833678928/1098821235074404455/Rectangle_7.png')",
        nylon: "url('https://cdn.discordapp.com/attachments/896756725833678928/1098929136820563969/Rectan111gle_7.png')",
        cotton: "url('https://cdn.discordapp.com/attachments/896756725833678928/1098928657331925072/Image-by-Anneleven-Canva-Pro.png')"
      }
    },
  },
  plugins: [],
}

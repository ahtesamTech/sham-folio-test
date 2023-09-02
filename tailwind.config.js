/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('flowbite/plugin'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}


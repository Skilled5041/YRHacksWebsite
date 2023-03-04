/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    daisyui: {
        themes: ['emerald']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

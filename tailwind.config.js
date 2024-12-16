/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",             // Look for HTML/TS files in your src folder
    "./node_modules/flowbite/**/*.js"   // Include Flowbite's JS files for interactivity
  ],
  theme: {
    extend: {},   // You can add custom theme extensions here if needed
  },
  plugins: [
    require('flowbite/plugin')  // Enable Flowbite's Tailwind plugin
  ],
}

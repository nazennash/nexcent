/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#28CB8B',
        'primary_shade_1': '#43A046',
        'primary_shade_2': '#388E3B',
        'primary_shade_3': '#237D31',
        'primary_shade_4': '#1B5E1F',
        'primary_shade_5': '#103E13',
        'secondary': '#263238',
        'info': '#2194f3',
        'warning': '#FBC02D',
        'error': '#E53835',
        'success': '#2E7D31',
        'silver': '#F5F7FA',
      }
    },
  },
  plugins: [],
}
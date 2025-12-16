/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'christmas-red': '#C1121F',
                'snow-white': '#FFFFFF',
                'pine-green': '#1B4332',
                'gold-accent': '#FFD166',
                'midnight-blue': '#0B132B',
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                'bg-color': '#f5f5f5',
                'text-color': '#111111',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

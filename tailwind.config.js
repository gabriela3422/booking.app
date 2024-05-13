/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    theme: {
        container: {
            center: true,
             padding:'12px',
            screens: {
                sm: '940px',
                md: '960px',
                lg: '1140px',
                xl: '1320px',
            },
        },
        extend: {},
    },
    plugins: [],
}


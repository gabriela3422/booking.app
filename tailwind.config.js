/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
             padding:'12px',
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1320px',
            },
        },
        extend: {},
    },
    plugins: [],
}


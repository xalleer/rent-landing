module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A8C76',
                secondary: '#0A58CA',
                dark: '#212529',
                light: '#f8f9fa'
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}" // keeps support if you move files under /src later
    ],
    theme: { extend: { colors: { primary: "#e63946" } } },
    plugins: [],
};
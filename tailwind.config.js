/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#084367",
                    DEFAULT: "#1a2e3b",
                },
                secondary: {
                    light: "#cae9ff",
                    DEFAULT: "#4bc9ff",
                    dark: "#0faef1",
                },
            },

            boxShadow: {
                soft: "0 2px 10px -3px rgba(0,0,0, 0.2)",
            },

            fontSize: {
              xs: ["0.75rem", { lineHeight: "1rem" }],
            },
            fontFamily: {
              montserat: ["Montserrat", "sans-serif"],
              inter: ["Inter", "sans-serif"],
            }
        },
    },
    darkMode: "class",
    plugins: [require("@headlessui/tailwindcss")],
};

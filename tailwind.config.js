cat > tailwind.config.js <<'EOF'
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E8B57",
        yellowCTA: "#FFCC33",
        freshRed: "#E94B3C",
        bgWhite: "#FAFBF9"
      },
      fontFamily: {
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"]
      }
    }
  },
  plugins: []
};
EOF

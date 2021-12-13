module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ef-blue": "#24375C",
        "ef-light-blue": "#3D5E9C",
        "ef-red": "#E1000F",
      },
      fontFamily: {
        title: ["futura-pt-condensed"],
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["responsive", "hover"],
      borderWidth: ["responsive", "hover"],
      borderColor: ["responsive", "hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

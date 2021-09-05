module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgcolor: "#F0F2F5",
        primary: "#1877F2",
        secondary: "#42B72A",
      },
      fontFamily: {
        body: ["arial"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

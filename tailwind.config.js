module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      animation: { glide: "glide 15s ease infinite" },
      keyframes: {
        glide: {
          "0%": { transform: "translateX(-25%)" },
          "100%": {
            transform: "translateX(25%)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

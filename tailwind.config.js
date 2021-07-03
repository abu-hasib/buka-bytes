module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      animation: {
        bounceIn: "bounceIn 1s ease-out 1",
        shuffle: "shuffle 1s ease-in-out 10s infinite",
      },
      keyframes: {
        bounceIn: {
          "0%": { opacity: 0 },
          "60%": {
            transform: "scale(1)",
            opacity: 1,
            transition: "all .7s cubic-bezier(.77,0,.18,1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        shuffle: {
          "0%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
          "100%": { transform: "translate3d(0, 100%, 0)", opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

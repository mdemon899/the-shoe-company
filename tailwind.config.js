/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
      },
      backgroundImage: {
        testimonialBg: "url('/Images/testimonial-background.png')",
      },
    },
  },
  plugins: [],
};

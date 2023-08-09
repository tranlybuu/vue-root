/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1280px",
			},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
  },
}


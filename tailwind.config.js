/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		lineHeight: {
			'xl': '1.875rem', // 30px
			'lg': '1.4375rem', // 23 px
			'md': '1.1875rem', // 19 px
			'sm': '0.9375rem' // 15 px
		}
	},
    colors: {
      "main-purple": "#635FC7",
      "main-purple-light": "#A8A4FF",
      "dark-grey": "#2B2C37",
      "lines-dark": "#3E3F4E",
      "white": "#FFFFFF",
      "light-grey": "#F4F7FD",
      "black": "#000112",
      "very-dark-grey": "#20212C",
      "medium-grey": "#828FA3",
      "lines-light": "#E4EBFA",
      "red": "#EA5555",
      "red-light": "#FF9898" 
    },
    fontSize: {
      'xl': "1.5rem", // 24px
      'lg': "1.125rem", // 18px
      'md': "0.9375rem", // 15px
      'sm': "0.8125rem", // 13px
      'xs': "0.75rem" // 12px
    }
  },
  plugins: [],
}

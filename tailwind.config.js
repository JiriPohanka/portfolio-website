const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "50": '50%',
      "55": '55%',
      "60": '60%',
      "65": '65%',
      "70": '70%',
      "75": '75%',
      "80": '80%'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      green: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber
    },
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        '1-min-350': 'minmax(350px, 1fr)',
        '2-min-350': 'repeat(2, minmax(350px, 1fr))'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      },
      animation: {
        "fadeIn-500": "fadeIn 0.5s ease-in forwards",
        fadeIn: "fadeIn 1s ease-in forwards",
        "fadeOut-500": "fadeOut 0.5s ease-in forwards",
        fadeOut: "fadeOut 1s ease-in forwards",
        blink: "blink 0.5s linear infinite"
      }
    }
  },
  variants: {
    extend: {
      zIndex: ['hover'],
    },
  },
  plugins: [],
}
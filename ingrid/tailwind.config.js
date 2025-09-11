module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A57',
        secondary: '#D4AF37',
        accent: '#C79C2C',
      },
      backgroundImage: {
        'hero-pattern': "url('/imgs/shop-from-the-outside.jpg')",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
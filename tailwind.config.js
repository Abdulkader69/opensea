module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Grey': 'rgb(112,122,131)',
        'Dark': 'rgb(53,56,64)',
        'Blue': 'rgb(32,129,226)',
      },
      boxShadow: {
        'NFT': '0 0 8px 0 rgba(4, 17, 29, 0.25)',
      }
    },
  },
  plugins: [],
}
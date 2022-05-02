module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg_custom_1': '#1F2021',
        'bg_custom_2': '#161716',
        'bg_custom_3': '#2d2d2d',
        'bg_custom_4': '#555555',
        'bg_blue_custom_1': '#183563',
        'bg_blue_custom_2': '#040d1b',
        'bg_blue_custom_3': '#14357b',
        'bg_blue_custom_4': '#132355',
        'purple_custome_1:': '#804a87',
        'purple_custome_2': '#e861e1',
        'blue_new_1': '#3500D3',
        'font_color': '#bfc0bf',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      height: {
        '288': '72rem',
        '144': '36rem',
      },
      width: {
        '288': '72rem',
        '144': '36rem',
      },
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
      },
      spacing: {
        '144': '36rem',
        '152': '40.5rem',
      }
    },
  },
  plugins: [],
}
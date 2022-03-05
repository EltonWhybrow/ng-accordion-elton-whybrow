module.exports = {
  prefix: '',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        "custom-grey": {
          "50": "#dbdbdb",
          "100": "#d1d1d1",
          "200": "#c7c7c7",
          "300": "#bdbdbd",
          "400": "#b3b3b3",
          "500": "#a9a9a9",
          "600": "#9f9f9f",
          "700": "#959595",
          "800": "#8b8b8b",
          "900": "#818181"
        }
      },
      borderWidth: {
        '30': '30px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

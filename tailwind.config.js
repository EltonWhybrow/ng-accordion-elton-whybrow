module.exports = {
  // mode: 'jit',
  prefix: '',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      borderWidth: {
        '30': '30px',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-45deg)' },
        }
      },
      animation: {
        rotate: 'rotate .3s linear forwards',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

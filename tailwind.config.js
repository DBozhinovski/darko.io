// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02']
    },
    extend: {
      height: () => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      fontSize: {
        'xs': '11px',
        's': '13px',
        'm': '17px',
        'l': '28px',
        'xl': '36px',
        '2xl': '48px',
        '3xl': '64px',
        base: '16px',
      },
      lineHeight: {
        'lg': '1.6',
        'md': '1.33',
        'sm': '1.25',
        'xs': '1',
      },
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("@tailwindcss/custom-forms"),
    require('tailwindcss-font-inter')({
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 16,
      baseLineHeight: 1.5,
      importFontFace: true,
      disableUnusedFeatures: false
    })
  ]
};

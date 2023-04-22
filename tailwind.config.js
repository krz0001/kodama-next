module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js','./pages/**/*.mdx', './_projects/*.mdx'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ],
  theme: {
    extend: {
      fontFamily: {
        'release': ['Arquitecta', 'sans-serif'],
      },
      boxShadow: {
        'inner-xl': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.5)',
      }
    }
  }
}

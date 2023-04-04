module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js','./pages/**/*.mdx', './_projects/*.mdx'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.5)',
      }
    }
  }
}

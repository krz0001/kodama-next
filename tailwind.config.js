module.exports = {
  content: ["./node_modules/flowbite-react/**/*.js",'./components/**/*.js', './pages/**/*.js','./pages/**/*.mdx' ],
  plugins: [
    require('@tailwindcss/typography'),
    require("flowbite/plugin")
  ],
}

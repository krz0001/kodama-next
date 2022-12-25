const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

module.exports = withPlugins([
    nextTranslate({
        pageExtensions: ["page.js", "page.mdx"],
        reactStrictMode: true,
        i18n: {
            locales: ['en'],
            defaultLocale: 'en',
            localeDetection: false,
        }
    }),
    withMDX
])

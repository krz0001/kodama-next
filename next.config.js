const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    pageExtensions: ["page.js"],
    reactStrictMode: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
        localeDetection: false,
    }
})
const compose = require('compose-function')
const withTM = require('next-transpile-modules')(['landing-blocks', 'dokz'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: !!process.env.ANAL,
})


const composed = compose(withBundleAnalyzer, withTM, )

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
})

const compose = require('compose-function')
const withTM = require('next-transpile-modules')(['landing-blocks'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: !!process.env.ANAL,
})
const { withDokz } = require('dokz/dist/plugin')

const composed = compose(withBundleAnalyzer, withTM, withDokz)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
})

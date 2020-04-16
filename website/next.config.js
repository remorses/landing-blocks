const compose = require('compose-function')
const withTM = require('next-transpile-modules')(['landing-blocks'])

const { withDokz } = require('dokz/dist/plugin')

const composed = compose(withTM, withDokz)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
})

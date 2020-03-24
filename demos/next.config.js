const path = require('path')
const withTM = require('next-transpile-modules')(['src']) // pass the modules you would like to see transpiled

module.exports = withTM({
    webpack: (config) => {
        config.resolve.alias['src'] = path.resolve(__dirname) + '/../src'
        return config
    },
})

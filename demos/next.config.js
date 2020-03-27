const path = require('path')
const withTM = require('next-transpile-modules')(['react-landing']) // pass the modules you would like to see transpiled

module.exports = withTM({
    webpack: (config) => {
        return config
    },
})

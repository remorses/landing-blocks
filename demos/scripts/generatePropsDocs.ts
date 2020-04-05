import path from 'path'
import { withCustomConfig } from 'react-docgen-typescript'

const BASE_PATH = path.resolve(__dirname, '../../core/')

const parser = withCustomConfig(path.resolve(BASE_PATH, './tsconfig.json'), {
    propFilter: (prop, component) => {
        if (prop.parent) {
            return !prop.parent.fileName.includes('node_modules')
        }
        return true
    },
})

const res = parser.parse(path.resolve(BASE_PATH, 'src', 'Pricing.tsx'))
console.log(JSON.stringify(res, null, 4))

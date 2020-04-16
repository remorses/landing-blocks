import fs from 'fs'
import path from 'path'
import { NextApiHandler } from 'next'
import { resolve } from '../../support/resolve'

function makePath(name) {
    return `node_modules/@types/${name}/index.d.ts`
}

const libs = ['prop-types', 'react', '@chakra-ui/core', 'react-landing']

// TODO resolve resursively all .d.ts files, or just read recursively all the .d.ts files inside the package folder and return those

const handler: NextApiHandler = async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const extraLibsPromises = libs.map(async (name) => {
        const filePath = makePath(name)
        const here = path.resolve('.')
        const resolvedPath = resolve(name, here)
        if (!resolvedPath.found) {
            console.error('ERROR could not resolve ' + name)
            return {
                filePath,
                content: '',
            }
        }
        const content = await fs.promises.readFile(resolvedPath.path, 'utf-8')
        return {
            filePath,
            content: content.toString(),
        }
    })
    const extraLibs = await Promise.all(extraLibsPromises)
    res.end(JSON.stringify({ extraLibs }))
}

export default handler

import fs from 'fs'
import { NextApiHandler } from 'next'

function makePath(name) {
    return `node_modules/@types/${name}/index.d.ts`
}

export function getExtraLibs({
    libs,
    readFile = (x) => '',
}): Promise<{ filePath; content }[]> {
    const extraLibs = libs.map(async (name) => {
        const filePath = makePath(name)
        const content = await readFile(name)
        return {
            filePath,
            content: content.toString(),
        }
    })
    return Promise.all(extraLibs)
}

const libs = ['csstypes', 'prop-types', 'react']

const handler: NextApiHandler = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const extraLibs = []
    res.end(JSON.stringify({ extraLibs }))
}

export default handler

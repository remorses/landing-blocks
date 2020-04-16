import path from 'path'
import fs from 'fs'
import { expect } from 'chai'
import { resolve } from '../src/support/resolve'

function ok(res) {
    console.log(res)
    expect(res.found).to.be.eq(true)
    fs.accessSync(res.path)
}

describe('resolve types', () => {
    it('works', () => {
        var res = resolve('react', path.resolve(__dirname, 'index.js'))
        ok(res)
        var res = resolve(
            'react-extra-hooks',
            path.resolve(__dirname, 'index.js'),
        )
        expect(res.found).to.be.eq(true)
        ok(res)
    })
})

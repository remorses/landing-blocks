import { Sema } from 'async-sema'
import url from 'url'
import capture from 'capture-website'
import { demosPaths, DEMOS_WEBSITE } from '../constants'
// capture-website --type jpeg http://localhost:3000/docs  --output screen.jpg --overwrite --scale-factor 0.5 --width 1200 --height 1400

const semaphore = new Sema(100)



async function main({ paths }: { paths: typeof demosPaths }) {
    const promises = paths.map(async ({ url, imagePath }) => {
        try {
            await semaphore.acquire()
            const output = `public/${imagePath}`

            console.log(`screenshotting '${url}' to '${output}'`)
            const res = await capture.file(url, output, {
                width: 1200,
                height: 1400,
                scaleFactor: 0.5,
                overwrite: true,
                type: 'jpeg',
                delay: 5,
            })
        } finally {
            await semaphore.release()
        }
    })
    await Promise.all(promises)
}

main({
    paths: demosPaths,
}).catch(console.error)

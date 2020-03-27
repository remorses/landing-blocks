import React from 'react'
import { ThemeProvider, Box, CSSReset, Flex } from '@chakra-ui/core'
import { MonacoEditor } from '../LiveEditor'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { usePromise } from 'react-extra-hooks'

const code = `
import React, {render} from 'react'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

render(
    <div >
      So functional. Much wow!
      so shit
        <pre>
        FUCK YOU
        </pre>
    </div>
  )
`

function transformCode(code) {
    return code
        .split('\n')
        .filter((x) => !x.startsWith('import'))
        .join('\n')
}

const scope = {}

async function getExtraLibs() {
    const res = await fetch('/api/extraLibs')
    const { extraLibs } = await res.json()
    console.log({ extraLibs })
    return extraLibs
}

const Page = ({}) => {
    const { result: extraLibs } = usePromise(getExtraLibs, {
        cache: true,
    })
    return (
        <ThemeProvider>
            <CSSReset />
            <Box p='40px' minWidth='100%' maxWidth='1200px'>
                <LiveProvider
                    language='typescript'
                    code={code}
                    noInline
                    scope={scope}
                    transformCode={transformCode}
                >
                    <Flex flexDir='row'>
                        <MonacoEditor
                            height='600px'
                            extraLibs={extraLibs || []}
                        />
                        <LiveError />
                        <Box
                            minWidth='50%'
                            maxWidth='100%'
                            border='1px solid black '
                        >
                            <LivePreview />
                        </Box>
                    </Flex>
                </LiveProvider>
            </Box>
        </ThemeProvider>
    )
}

export default Page

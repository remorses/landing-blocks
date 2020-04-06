import React, { useRef } from 'react'
import debounce from 'lodash/throttle'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { ThemeProvider, Box, CSSReset, Flex } from '@chakra-ui/core'
import { MonacoEditor } from '../LiveEditor'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { usePromise } from 'react-extra-hooks'
import { LandingProvider, NavBar, Button, Hero, Heading } from 'react-landing'

// TODO every element must have a display name, and this must be equal to the imported component name in scope
// TODO generate the component from input like, elements (hero, features, ), primary color, buttons style, font family, illustrations to use, decorations, ...
const initialComponent = (
    <LandingProvider primary='#FF593D'>
        <NavBar
            logo={<img width='120px' src='/datocms/logo.svg' />}
            navs={[
                <a>Why DatoCMS</a>,
                <a>Learn</a>,
                <a>Marketplace</a>,
                <a>Pricing</a>,
                <Button>try for free!</Button>,
            ]}
        />
        <Hero
            key='1'
            heading={
                <Heading
                    fontFamily='tiempos-headline, Georgia'
                    fontSize='74px'
                    fontWeight='bold'
                >
                    The best companies are built on unified content
                </Heading>
            }
            subhead='More than 4.000 businesses use DatoCMS to create their online content at scale from a central hub, and distribute it easily via API to websites and any other digital experience.'
            image={null}
            cta={<Button>Try it now for free!</Button>}
        />
    </LandingProvider>
)

function wrapJsxCode(code) {
    return `
import React from 'react'
import { Hero, Heading, LandingProvider, SubHeading, Divider, Col, Feature, HowItWorks, FeaturesList, NavBar, Footer, SectionTitle, TestimonialsLogos, Button, } from 'react-landing'

render(
    
    ${code}
    
)
`
}

const initialCode = wrapJsxCode(reactElementToJSXString(initialComponent))

const transformCode = function transformCode(code) {
    code = code
        .split('\n')
        .filter((x) => !x.startsWith('import'))
        .join('\n')
    // TODO transform `export default` to `render`
    return code
}

async function getExtraLibs() {
    const res = await fetch('/api/extraLibs')
    const { extraLibs } = await res.json()
    console.log({ extraLibs })
    return extraLibs
}

const Page = ({}) => {
    const { result: extraLibs, loading } = usePromise(getExtraLibs, {
        cache: true,
    })
    const editor = useRef<monacoEditor.editor.IStandaloneCodeEditor>()
    const scope = {
        ...require('react-landing'),
        // onChange: debounce(
        //     (code) => {
        //         console.log({ editor: editor.current })

        //         code = wrapJsxCode(code)
        //         editor.current.setValue(code)
        //     },
        //     3000,
        //     { leading: false },
        // ),
    }

    if (loading) {
        return 'loading'
    }
    return (
        <ThemeProvider>
            <CSSReset />
            <Box minWidth='100%' maxWidth='1200px'>
                <LiveProvider
                    language='typescript'
                    code={initialCode}
                    noInline
                    scope={scope}
                    transformCode={transformCode}
                >
                    <Flex flexDir='row'>
                        <MonacoEditor
                            ref={editor}
                            height='100vh'
                            width='300px'
                            extraLibs={extraLibs || []}
                        />
                        <LiveError />
                        <Box
                            flex='1'
                            border='1px solid black '
                        >
                            <LivePreview style={{ overflowY: 'scroll' }} />
                        </Box>
                    </Flex>
                </LiveProvider>
            </Box>
        </ThemeProvider>
    )
}

export default Page

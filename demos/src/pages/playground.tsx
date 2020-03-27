import React, { useRef } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import { ThemeProvider, Box, CSSReset, Flex } from '@chakra-ui/core'
import { MonacoEditor } from '../LiveEditor'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { usePromise } from 'react-extra-hooks'
import { EditableProvider } from 'react-landing/src'

const code = `
import React from 'react'
import { Hero, Heading, LandingProvider, SubHeading, Divider, Col, Feature, HowItWorks, FeaturesList, NavBar, Footer, SectionTitle, TestimonialsLogos, Button, } from 'react-landing'

render(
    <EditableProvider onChange={onChange}>
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
            cta='Try it now for free!'
        />
    </LandingProvider>
    </EditableProvider>
)

`

function transformCode(code) {
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
        onChange: (code) => {
            // TODO throttle this to run only after 3 seconds
            console.log({ editor: editor.current })
            // TODO should add imports and render function, wrap around the component
            // TODO every element must have a display name
            // editor.current.setValue(code)
        },
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
                    code={code}
                    noInline
                    scope={scope}
                    transformCode={transformCode}
                >
                    <Flex flexDir='row'>
                        <MonacoEditor
                            ref={editor}
                            height='100vh'
                            extraLibs={extraLibs || []}
                        />
                        <LiveError />
                        <Box
                            minWidth='50%'
                            maxWidth='100%'
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

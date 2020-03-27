import React from 'react'
import { ThemeProvider, Box, CSSReset, Flex } from '@chakra-ui/core'
import { MonacoEditor } from '../LiveEditor'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { usePromise } from 'react-extra-hooks'

const code = `
import React from 'react'
import { Hero, Heading, LandingProvider, SubHeading, Divider, Col, Feature, HowItWorks, FeaturesList, NavBar, Footer, SectionTitle, TestimonialsLogos, Button, } from 'react-landing'

render(
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

function getScope() {
    const landing = require('react-landing')
    return {
        ...landing
    }
}

console.log({ scope: getScope() })

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
    if (loading) {
        return 'loading'
    }
    return (
        <ThemeProvider>
            <CSSReset />
            <Box p='40px' minWidth='100%' maxWidth='1200px'>
                <LiveProvider
                    language='typescript'
                    code={code}
                    noInline
                    scope={getScope()}
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

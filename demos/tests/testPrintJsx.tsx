import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {
    LandingProvider,
    NavBar,
    Button,
    Hero,
    Heading,
} from 'react-landing/src'

const CONST = 'dsfdsf'

describe('reactElementToJSXString react-element-to-jsx-string', () => {
    it('works', () => {
        var res = reactElementToJSXString(
            <LandingProvider primary='#FF593D'>
                <NavBar
                    xxx={CONST}
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
            </LandingProvider>,
        )
        console.log(res)
    })
    it('works with objects', () => {
        const props = {
            xxx: CONST,
            logo: <img width='120px' src='/datocms/logo.svg' />,
            navs: [
                <a>Why DatoCMS</a>,
                <a>Learn</a>,
                <a>Marketplace</a>,
                <a>Pricing</a>,
                <Button>try for free!</Button>,
            ]
        }
        var res = reactElementToJSXString(
                <NavBar
                    {...props}
                />
        )
        console.log(res)
    })
})

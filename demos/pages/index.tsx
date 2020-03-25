import React from 'react'
import Head from 'next/head'
import {
    Hero,
    Heading,
    LandingProvider,
    SubHeading,
    Divider,
    Col,
} from 'react-landing/src'

const Page = () => (
    <LandingProvider>
        <Hero
            heading='Make your website editable for the whole team'
            subhead='Choose your technology. Use the API to fetch content. Empower
        your content team.'
            image={<img src='/code.png' />}
            cta='Test it out'
        />
        <Divider w='100%' />
    </LandingProvider>
)

export default Page

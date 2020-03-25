import React from 'react'
import Head from 'next/head'
import {
    Hero,
    Heading,
    LandingProvider,
    SubHeading,
    Divider,
    Col,
    Feature,
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
        <Feature
            heading='Prismic is a Content Management System, a tool for editing online content'
            subhead="Also known as a headless CMS, an API CMS, a content platform, a disruptive content-as-a-service digital experience...basically we've built a tool that lets you choose your technology, framework, and language and then easily manage your content."
            image={<img src='feature1.jpg' width='500px' />}
            backgroundColor='gray.100'
            flip
        />
    </LandingProvider>
)

export default Page

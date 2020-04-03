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
    HowItWorks,
    FeaturesList,
    NavBar,
    Footer,
    TestimonialsLogos,
    SectionTitle,
    Button,
} from 'react-landing/src'
import { Box, Stack, Image } from '@chakra-ui/core'

const Page = () => (
    <LandingProvider
        dark
        backgroundImage='url("/rocketchat/sky.jpg")'
        backgroundRepeat='repeat'
        backgroundPosition='center'
        backgroundSize='100% auto'
        primary='white'
    >
        <NavBar
            dark
            logo={<Image width='200px' src='/rocketchat/logo2.svg' />}
            navs={[
                <a>Home</a>,
                <a>Pricing</a>,
                <a>Community</a>,
                <a>Enterprise</a>,
                <a>Blog</a>,
                <Button px='10px'>Sign up</Button>,
            ]}
        />
        <Hero
            dark
            bullet='SUPERPOWERS FOR DEVELOPER'
            heading='Workstream Collaboration & Omnichannel Customer Engagement'
            subhead='Control your communication, manage your data and have your own collaboration platform to improve team productivity. Rocket.Chat is scalable and open source, replace email and improve your digital workflow.'
            image={<img width='600px' src='/rocketchat/hero.png' />}
            cta='Start cloud trial'
        />
        <Divider heading='trusted by' dark />
        <TestimonialsLogos
            testimonials={[
                <img src='quovery/google.png' />,
                <img src='quovery/datadog.png' />,
                <img src='quovery/itiviti.png' />,
                <img src='quovery/redhat.png' />,
                <img src='quovery/criteol.png' />,
            ]}
        />

        <Feature
            heading='Replace Email'
            flip
            subhead='Open up the conversation and remove the need for CC/BCC by using Rocket.Chat Channels and Private Groups to speak to your team openly for greater transparency.'
            floatingElement={
                <Image
                    minW='500px'
                    src='/rocketchat/feature1.svg'
                    // position='absolute'
                    alignSelf='flex-start'
                    ml='-600px'
                    mt='200px'
                />
            }
        />
        <Feature
            heading='Team Chat'
            subhead='Open up the conversation and remove the need for CC/BCC by using Rocket.Chat Channels and Private Groups to speak to your team openly for greater transparency.'
            floatingElement={
                <Image
                    minW='700px'
                    src='/rocketchat/feature2.svg'
                    // position='absolute'
                    alignSelf='flex-end'
                    mr='-600px'
                    mt='200px'
                />
            }
        />
        <Footer
            businessName='Quovery'
            columns={{
                Developers: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Company: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
                Product: [
                    <a>Quickstart</a>,
                    <a>Documentation</a>,
                    <a>Samples</a>,
                ],
            }}
        />
    </LandingProvider>
)

export default Page

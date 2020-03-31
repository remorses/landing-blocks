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
    Button,
} from 'react-landing/src'
import { GradientCurtains } from 'react-landing/src/decorations'

const Page = () => (
    <LandingProvider primary='#5D21D2'>
        <NavBar
            logo={<img width='200px' src='/spendesk/logo.svg' />}
            navs={[
                <a>Features</a>,
                <a>Use Cases</a>,
                <a>Pricing</a>,
                <a>About Us</a>,
                <a>Login</a>,
                <Button px='10px'>Try 1 month free</Button>,
            ]}
        />
        <Hero
            heading='Smart spend management for modern businesses'
            subhead='Spendesk combines powerful spend management software with corporate cards to help businesses take control of spending.'
            image={<img width='400px' src='/spendesk/hero.png' />}
            cta='Book a demo'
            floatingElement={
                <GradientCurtains mt='-600px' />
            }
        />
        <FeaturesList
            heading='Take control of company spending'
            centerText
            features={[
                {
                    heading: 'Control',
                    icon: <img width='200px' src='/spendesk/step1.svg' />,
                    subhead:
                        'Multi-level approvals and custom spending limits.',
                },
                {
                    heading: 'Pay',
                    icon: <img width='200px' src='/spendesk/step2.svg' />,
                    subhead:
                        'Smart company cards, virtual cards, and invoice tracking.',
                },
                {
                    heading: 'Track',
                    icon: <img width='200px' src='/spendesk/step3.svg' />,
                    subhead: 'Real-time spending overview and receipt capture.',
                },
                {
                    heading: 'Report',
                    icon: <img width='200px' src='/spendesk/step4.svg' />,
                    subhead: 'Simplified bookkeeping and budget analysis.',
                },
            ]}
        />
        {/* <Feature
            heading='Prismic is a Content Management System, a tool for editing online content'
            subhead="Also known as a headless CMS, an API CMS, a content platform, a disruptive content-as-a-service digital experience...basically we've built a tool that lets you choose your technology, framework, and language and then easily manage your content."
            image={<img src='/spendesk/feature1.png' width='500px' />}
            flip
        /> */}

        <Footer
            businessName='Prismic'
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

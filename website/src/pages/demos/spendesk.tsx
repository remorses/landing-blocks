import React from 'react'
import Head from 'next/head'
import {
    Hero,
    Heading,
    LandingProvider,
    Subheading,
    Divider,
    Col,
    Feature,
    HowItWorks,
    FeaturesList,
    NavBar,
    Footer,
    Button,
    Faqs,
} from 'react-landing/src'
import { GradientCurtains } from 'react-landing/src/decorations'
import { Box } from '@chakra-ui/core'

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
            subheading='Spendesk combines powerful spend management software with corporate cards to help businesses take control of spending.'
            image={<img width='400px' src='/spendesk/hero.png' />}
            cta={<Button>Book a demo</Button>}
            floatingElement={<GradientCurtains mt='-600px' />}
        />
        <FeaturesList
            heading='Take control of company spending'
            centerText
            features={[
                {
                    heading: 'Control',
                    icon: <img width='200px' src='/spendesk/step1.svg' />,
                    subheading:
                        'Multi-level approvals and custom spending limits.',
                },
                {
                    heading: 'Pay',
                    icon: <img width='200px' src='/spendesk/step2.svg' />,
                    subheading:
                        'Smart company cards, virtual cards, and invoice tracking.',
                },
                {
                    heading: 'Track',
                    icon: <img width='200px' src='/spendesk/step3.svg' />,
                    subheading: 'Real-time spending overview and receipt capture.',
                },
                {
                    heading: 'Report',
                    icon: <img width='200px' src='/spendesk/step4.svg' />,
                    subheading: 'Simplified bookkeeping and budget analysis.',
                },
            ]}
        />
        {/* <Feature
            heading='Prismic is a Content Management System, a tool for editing online content'
            subheading="Also known as a headless CMS, an API CMS, a content platform, a disruptive content-as-a-service digital experience...basically we've built a tool that lets you choose your technology, framework, and language and then easily manage your content."
            image={<img src='/spendesk/feature1.png' width='500px' />}
            flip
        /> */}
        <Faqs
            faqs={[
                {
                    question: 'What is Spendesk',
                    answer: (
                        <Box>
                            Spendesk is the first spend management platform
                            built for both finance teams and employees. It gives
                            finance leaders visibility across all company
                            spending.
                        </Box>
                    ),
                },
                {
                    question: 'Should i care?',
                    answer: (
                        <Box>
                            Spendesk is the first spend management platform
                            built for both finance teams and employees. It gives
                            finance leaders visibility across all company
                            spending.
                        </Box>
                    ),
                },
                {
                    question: 'Why is this useful',
                    answer: (
                        <Box>
                            Spendesk is the first spend management platform
                            built for both finance teams and employees. It gives
                            finance leaders visibility across all company
                            spending.
                        </Box>
                    ),
                },
            ]}
        />

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

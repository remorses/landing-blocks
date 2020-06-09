import { Button, Feature, FeaturesList, Footer, Hero, LandingProvider, NavBar, SectionTitle, TestimonialsLogos } from 'landing-blocks/src'
import React from 'react'

const Page = () => (
    <LandingProvider primary='#0524ED'>
        <NavBar
            logo={<img width='120px' src='/testim/logo.svg' />}
            navs={[
                <a>Features</a>,
                <a>Use Cases</a>,
                <a>Pricing</a>,
                <a>About Us</a>,
                <a>Login</a>,
                <Button px='10px'>Start free trial</Button>,
            ]}
        />
        <Hero
            heading='Tests that deliver'
            subheading='Super-fast authoring. Amazingly stable tests.
            Your way—coded, codeless, or both!'
            image={
                <video
                    autoPlay
                    muted
                    poster='/testim/hero.jpg'
                    src='/testim/hero.mp4'
                    width='700px'
                />
            }
            fingerprint='No credit card required'
            cta={<Button>Start free trial</Button>}
        />
        <TestimonialsLogos
            heading='Trusted by happy customers worldwide'
            // subheading='Trusted by happy customers worldwide'
            testimonials={[
                <img src='/datocms/dropbox.svg' />,
                <img src='/datocms/hashicorp.svg' />,
                <img src='/datocms/verizon.svg' />,
                <img src='/datocms/vmware.svg' />,
                <img src='/datocms/linkedin.svg' />,
            ]}
        />

        <FeaturesList
            heading='Why we think Prismic is good for developers '
            centerText
            features={[
                {
                    heading: 'Expand test coverage',
                    icon: <img src='/testim/step1.svg' />,
                    subheading:
                        'Fast authoring increases coverage and quality across your application..',
                },
                {
                    heading: 'Reduce maintenance',
                    icon: <img src='/testim/step2.svg' />,
                    subheading:
                        'AI-based stabilizers eliminate flaky tests that consume resources.',
                },
                {
                    heading: 'Increase test agility',
                    icon: <img src='/testim/step3.svg' />,
                    subheading:
                        'Code, record and manage tests your way with your tools for greater flexibility.',
                },
            ]}
        />
        <Feature
            heading='Fit your process'
            subheading='Testim integrates with the tools you already use so you can stay in your flow.'
            image={<img src='/testim/feature.png' width='700px' />}
            bg='#1A2230'
            py='0'
            animate={false}
            dark
        />
        <SectionTitle heading='Start testing with testim' subheading='' cta={<Button>Start Free Trial</Button>} />
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

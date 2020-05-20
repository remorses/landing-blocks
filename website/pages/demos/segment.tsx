import React, { Fragment } from 'react'
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
    Banner,
    Button,
    Pricing,
    TestimonialsTweets,
    EmailForm,
    CodeSnippet,
    MailchimpForm,
    TestimonialsLogos,
    SectionTitle,
} from 'landing-blocks/src'

import { GradientCurtains } from 'landing-blocks/src/decorations'
import { Image, Stack, AspectRatioBox } from '@chakra-ui/core'
import { Link, Box } from '@chakra-ui/core'
import { FiCheck } from 'react-icons/fi'

const heroCode = `
// Creating a new record
await segment.users.create({
  data: {
    firstName: "Alice",
    email: "alice@segment.io",
    active: true,
  }
})`

const BG =
    'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

const Page = () => (
    <Fragment>
        <LandingProvider background={BG} primary='#52BD95'>
            <NavBar
                dark
                logo={
                    <Image
                        width='160px'
                        color='white'
                        src='/segment/logo2.svg'
                    />
                }
                navs={[
                    <a>Features</a>,
                    <a>Use Cases</a>,
                    <a>Pricing</a>,
                    <a>About Us</a>,
                    <a>Login</a>,
                ]}
            />
            <Hero
                bullet='INTRODUCING segment 2.0'
                dark
                image={
                    <Image src='/segment/hero.svg' w='600px' height='500px' />
                }
                heading={
                    <Heading maxW='600px' fontSize='50px'>
                        The best companies are built on unified customer data
                    </Heading>
                }
                subheading='Segment is a customer data platform that makes good data accessible for all teams.'
                // image={<img width='500px' src='/segment/hero.png' />}
                cta={<MailchimpForm cta='Get a Demo' url='' />}
                fingerprint={
                    <Link fontSize='16px' color='primary'>
                        Create a free account
                    </Link>
                }
            />
            <Divider
                dark
                heading='Join the 20,000+ companies using the Segment platform'
            />
            <TestimonialsLogos
                dark
                testimonials={[
                    <Image w='140px' src='/quovery/google.png' />,
                    <Image w='140px' src='/quovery/datadog.png' />,
                    <Image w='140px' src='/quovery/itiviti.png' />,
                    <Image w='140px' src='/quovery/redhat.png' />,
                    <Image w='140px' src='/quovery/criteol.png' />,
                ]}
            />
            <SectionTitle
                dark
                heading='Empower every team with good data'
                subheading='Segment collects user events from your web & mobile apps and provides a complete data toolkit to every team in your company.'
            />
            <Image maxH='500px' src='/segment/section-image2.svg' />
            <Stack bg='white'>
                <Feature
                    heading='Single view of the customer'
                    subheading='Unify your customer’s touch points across all platforms and channels.'
                    bullet='Segment for Marketing Teams'
                    image={
                        <Image
                            shadow='lg'
                            borderRadius='10px'
                            h='460px'
                            src='/segment/feature1.svg'
                        />
                    }
                />
                <Feature
                    flip
                    heading='Launch with the best stack'
                    subheading='Enable the best product analytics, A/B testing, and data warehouse tools with the flip of a switch.                    '
                    bullet='Segment for Product Teams'
                    image={
                        <Image
                            shadow='lg'
                            borderRadius='10px'
                            h='420px'
                            src='/segment/feature3.svg'
                        />
                    }
                />
            </Stack>
            <Feature
                dark
                heading='One API. Cleaner code.'
                subheading='Use one API to collect analytics data, across any platform. We have SDKs for Javascript, iOS, Android, and 20+ server-side languages.'
                bullet='Segment for Engineering Teams'
                image={
                    <Image
                        shadow='lg'
                        borderRadius='10px'
                        h='420px'
                        src='/segment/feature2.svg'
                    />
                }
            />
            <Stack bg='white'>
                <Banner
                    heading='Getting started is easy'
                    subheading='Start connecting your data with Segment.'
                    // bullet='READY TO TRY?'
                    bg='transparent'
                    image={
                        <Image
                            mr='-200px'
                            h='560px'
                            src='/segment/banner.svg'
                        />
                    }
                    cta={
                        <Stack direction='row'>
                            <Button>Get a demo</Button>
                            <Button bg='white'>Create free account</Button>
                        </Stack>
                    }
                />
            </Stack>
            <Footer
                dark
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
    </Fragment>
)

export default Page

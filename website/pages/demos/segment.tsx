import { Image } from '@chakra-ui/core'
import { Banner, Button, Divider, Feature, Footer, Heading, Hero, LandingProvider, Link, MailchimpForm, NavBar, Section, SectionTitle, TestimonialsLogos } from 'landing-blocks/src'
import { PatternBackground } from 'landing-blocks/src/PatternBackground'
import { Box, Stack } from 'layout-kit-react'
import React, { Fragment } from 'react'
import { FaArrowRight } from 'react-icons/fa'

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
                bullet='Introducing segment 2.0'
                dark
                image={
                    <Box minW='600px' position='relative'>
                        <Image
                            src='/segment/hero.svg'
                            w='600px'
                            height='500px'
                        />
                        <Image
                            position='absolute'
                            src='/segment/hero-background.svg'
                            w='600px'
                            ml='340px'
                            mb='140px'
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            height='500px'
                        />
                    </Box>
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
            <Section degree={4} bg='white'>
                <Feature
                    heading='Single view of the customer'
                    subheading='Unify your customer’s touch points across all platforms and channels.'
                    bullet='Segment for Marketing Teams'
                    cta={
                        <Link>
                            Explore Segment for Product Teams
                            <Box mx='10px' display='inline' as={FaArrowRight} />
                        </Link>
                    }
                    image={
                        <PatternBackground
                            pattern='dotsMd'
                            color='gray.300'
                            scatter={30}
                        >
                            <Image
                                shadow='lg'
                                borderRadius='10px'
                                w='460px'
                                src='/segment/feature1.svg'
                            />
                        </PatternBackground>
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
                    cta={
                        <Link>
                            Explore Segment for Teams
                            <Box mx='10px' display='inline' as={FaArrowRight} />
                        </Link>
                    }
                />
            </Section>
            <Feature
                dark
                heading='One API. Cleaner code.'
                subheading='Use one API to collect analytics data, across any platform. We have SDKs for Javascript, iOS, Android, and 20+ server-side languages.'
                bullet='Segment for Engineering Teams'
                cta={
                    <Link>
                        Explore Segment for Marketing
                        <Box mx='10px' display='inline' as={FaArrowRight} />
                    </Link>
                }
                image={
                    <Image
                        shadow='lg'
                        borderRadius='10px'
                        h='420px'
                        src='/segment/feature2.svg'
                    />
                }
            />
            <Section bg='white'>
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
                            <Button animate>Get a demo</Button>
                            <Button bg='white'>Create free account</Button>
                        </Stack>
                    }
                />
            </Section>
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

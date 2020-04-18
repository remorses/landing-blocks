import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import { FiGrid, FiImage, FiLayers, FiGlobe } from 'react-icons/fi'
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
    Footer,
    Button as LandingButton,
    TestimonialsLogos,
    SectionTitle,
    PageContainer,
    NavBar,
    Banner,
    MailchimpForm,
} from 'landing-blocks/src'
import { Faded } from 'baby-i-am-faded'
import { Box, Stack, Image, Button, Flex, Text } from '@chakra-ui/core'
import * as landingCards from '../svgs/landingCards'

import { IndexCardsPaths, demosPaths } from '../constants'
import { MyFooter, HeadingLogoIcon, headingNavLinks } from './_app'
import { HeroIllustration } from '../svgs'

const BG = '#5E629D'
const BG_IMG = 'linear-gradient(281deg, #a18aaf 0%, #5e629d 100%)'

const Page = () => (
    <LandingProvider primary='white'>
        <Stack spacing='60px' bg={BG} backgroundImage={BG_IMG}>
            <NavBar
                dark
                logo={<HeadingLogoIcon width='220px' long />}
                navs={[headingNavLinks]}
            />
            <Hero
                dark
                bullet='NOW AVAILABLE ON NPM'
                heading={<h1>Landing pages building blocks</h1>}
                subheading='Build your landing page in minutes using composable react components'
                image={<Box mr={['0', null, '-100px']} width='800px' as={HeroIllustration} />}
                cta={
                    <NextLink href='/docs'>
                        <LandingButton>Read The Docs</LandingButton>
                    </NextLink>
                }
                fingerprint='Completely open source'
            />
            <Divider
                heading='THE BEST WAY TO BUILD MODERN LANDING PAGES'
                dark
            />
            <FeaturesList
                animate
                py='0'
                heading=''
                centerText
                dark
                features={[
                    {
                        heading: 'Composable',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiGrid}
                            />
                        ),
                        subheading:
                            'Multi-level approvals and custom spending limits.',
                    },
                    {
                        heading: 'Maintainable',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiLayers}
                            />
                        ),
                        subheading:
                            'Smart company cards, virtual cards, and invoice tracking.',
                    },
                    {
                        heading: 'Extensible',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiImage}
                            />
                        ),
                        subheading:
                            'Simplified bookkeeping and budget analysis.',
                    },
                    {
                        heading: 'Open Source',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiGlobe}
                            />
                        ),
                        subheading:
                            'Real-time spending overview and receipt capture.',
                    },
                ]}
            />
        </Stack>

        <SectionTitle
            primary={BG}
            id='components'
            heading={
                <h2>
                    One block for every section <br /> of your landing page
                </h2>
            }
            subheading='Completely customizable, reusable and pretty by default'
            cta={
                <NextLink href='/docs'>
                    <LandingButton>Read The Docs</LandingButton>
                </NextLink>
            }
        />
        <LandingCardsLinks alignSelf='center' py='40px' />
        <Stack spacing='30px' bg={BG} backgroundImage={BG_IMG}>
            <SectionTitle
                id='demos'
                dark
                py='40px'
                pt='100px'
                heading={
                    <h2>
                        Look at some websites built <br />
                        with Landing Blocks
                    </h2>
                }
                subheading='Every block is completely customizable, you can build any landing page import some components'
                // cta={<LandingButton>Download The Demos Code</LandingButton>}
            />
            <DemosLinks alignSelf='center' py='40px' />
        </Stack>
        <Banner
            dark
            bg='gray.900'
            heading='Get notified when new components get published'
            subheading='You will get them first'
            cta={<MailchimpForm url='' />}
            fingerprint='No spam, promised'
            // bg={BG}
        />
        <MyFooter />
    </LandingProvider>
)

export const LandingCardsLinks = ({ ...rest }) => {
    return (
        <PageContainer>
            <Stack
                width='auto'
                justify='center'
                alignSelf='center'
                flexDirection='row'
                flexWrap='wrap'
                spacing='40px'
                flexGrow={0}
                flex='0 0 auto'
                {...rest}
            >
                {IndexCardsPaths.map((k) => {
                    const { icon, path, title } = k
                    return (
                        <Box key={k.path}>
                            <NextLink href={path}>
                                <Button
                                    borderRadius='8px'
                                    p='20px'
                                    mx='20px'
                                    h='auto'
                                    variant='ghost'
                                >
                                    <Stack spacing='20px'>
                                        <Box
                                            // border='1px solid'
                                            borderColor='gray.200'
                                            borderRadius='8px'
                                            width='300px'
                                            shadow='md'
                                            as={icon}
                                        />
                                        <Text>{title}</Text>
                                    </Stack>
                                </Button>
                            </NextLink>
                        </Box>
                    )
                })}
            </Stack>
        </PageContainer>
    )
}
const DemosLinks = ({ ...rest }) => {
    return (
        <PageContainer py='0px' {...rest}>
            <Stack
                width='auto'
                justify='center'
                alignSelf='center'
                flexDirection='row'
                flexWrap='wrap'
                spacing='40px'
            >
                {demosPaths.map((k) => {
                    const { imagePath, urlPath } = k
                    return (
                        <Box key={urlPath}>
                            <NextLink href={urlPath}>
                                <Button
                                    borderRadius='8px'
                                    mx='40px'
                                    h='auto'
                                    _hover={{ opacity: 0.6, shadow: 'xl' }}
                                    variant='unstyled'
                                >
                                    <Stack spacing='20px'>
                                        <Image
                                            // border='1px solid'
                                            borderColor='gray.200'
                                            borderRadius='8px'
                                            width='300px'
                                            shadow='md'
                                            src={imagePath}
                                        />
                                        {/* <Text>{title}</Text> */}
                                    </Stack>
                                </Button>
                            </NextLink>
                        </Box>
                    )
                })}
            </Stack>
        </PageContainer>
    )
}

export default Page

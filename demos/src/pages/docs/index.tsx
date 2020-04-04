import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import { FiGrid, FiImage, FiLayers, FiGlobe } from 'react-icons/fi'
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
    Button as LaningButton,
    TestimonialsLogos,
    SectionTitle,
    PageContainer,
} from 'react-landing/src'

import { Box, Stack, Image, Button, Flex, Text } from '@chakra-ui/core'
import * as landingCards from '../../svgs/landingCards'
import { IndexCardsPaths, demosPaths } from '../../constants'

export const LaindgCardsLinks = ({ ...rest }) => {
    return (
        <PageContainer>
            <Stack
                width='auto'
                justify={['center', null, 'flex-start']}
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
        <PageContainer>
            <Stack
                width='auto'
                justify={['center', null, 'flex-start']}
                alignSelf='center'
                flexDirection='row'
                flexWrap='wrap'
                spacing='40px'
                {...rest}
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

const Page = () => (
    <LandingProvider primary='white'>
        <Stack spacing='60px' bg='#5E629D'>
            <NavBar
                dark
                logo={<Image src='/logo.svg' width='200px' />}
                // logo={
                //     <Stack align='center' direction='row' spacing='20px'>
                //         <Image width='30px' src='/quovery/logo.png' />
                //         <Box fontWeight='medium' fontSize='20px'>
                //             Quovery
                //         </Box>
                //     </Stack>
                // }
                navs={[
                    <a>Components</a>,
                    <a>Demos</a>,
                    <a>Newsletter</a>,

                    // <Button px='10px'>Sign up</Button>,
                ]}
            />
            <Hero
                dark
                bullet='SUPERPOWERS FOR DEVELOPER'
                heading='Landing pages building blocks'
                subhead='Build your landing page in miunutes using composable react components'
                image={<img width='900px' src='/heroIllustration.svg' />}
                cta='SEE DEMOS'
                fingerprint='Completely open source'
            />
            <Divider heading='DEVELOPERS FROM GREAT COMPANIES TRUST US' dark />
            <FeaturesList
                heading=''
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
                        subhead:
                            'Multi-level approvals and custom spending limits.',
                    },
                    {
                        heading: 'maintenable',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiLayers}
                            />
                        ),
                        subhead:
                            'Smart company cards, virtual cards, and invoice tracking.',
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
                        subhead:
                            'Real-time spending overview and receipt capture.',
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
                        subhead: 'Simplified bookkeeping and budget analysis.',
                    },
                ]}
            />
        </Stack>

        <SectionTitle
            heading='Deploy your application with ease'
            subhead='Deploying an application with Qovery is as simple as pushing code with git'
            image={null}
        />
        <LaindgCardsLinks alignSelf='center' />
        <SectionTitle
            heading='Explore the demos'
            subhead='Deploying an application with Qovery is as simple as pushing code with git'
            image={null}
            cta='Download The Demos Code'
        />
        <DemosLinks alignSelf='center' />
        <Footer
            businessName='Quovery'
            bg='#F8F8FF'
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

import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import { MyNavBar } from '../components/MyNavBar'
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
    Footer,
    Button as LandingButton,
    TestimonialsLogos,
    SectionTitle,
    PageContainer,
} from 'react-landing/src'

import { Box, Stack, Image, Button, Flex, Text } from '@chakra-ui/core'
import * as landingCards from '../svgs/landingCards'
import { IndexCardsPaths, demosPaths } from '../constants'
import { MyFooter } from '../components/MyFooter'

export const LaindgCardsLinks = ({ ...rest }) => {
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
        <PageContainer>
            <Stack
                width='auto'
                justify='center'
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
                                            borderRadius='2px'
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
            <MyNavBar />
            <Hero
                dark
                bullet='SUPERPOWERS FOR DEVELOPER'
                heading='Landing pages building blocks'
                subheading='Build your landing page in miunutes using composable react components'
                image={<img width='900px' src='/heroIllustration.svg' />}
                cta={
                    <NextLink href='#demos'>
                        <LandingButton>SEE DEMOS</LandingButton>
                    </NextLink>
                }
                fingerprint='Completely open source'
            />
            <Divider heading='DEVELOPERS FROM GREAT COMPANIES TRUST US' dark />
            <FeaturesList
                py='0'
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
                        subheading:
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
                        subheading:
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
                        subheading:
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
                        subheading: 'Simplified bookkeeping and budget analysis.',
                    },
                ]}
            />
        </Stack>

        <SectionTitle
            id='components'
            heading='Deploy your application with ease'
            subheading='Deploying an application with Qovery is as simple as pushing code with git'
            image={null}
        />
        <LaindgCardsLinks alignSelf='center' py='40px' />
        <Stack spacing='60px' bg='#5E629D'>
            <SectionTitle
                id='demos'
                dark
                py='100px'
                heading='Explore the demos'
                subheading='Deploying an application with Qovery is as simple as pushing code with git'
                image={null}
                cta={<LandingButton>Download The Demos Code</LandingButton>}
            />
            <DemosLinks alignSelf='center' py='40px' />
        </Stack>
        <MyFooter />
    </LandingProvider>
)

export default Page

import { Button, Image, Link, Text } from '@chakra-ui/react'
import {
    Banner,
    Button as LandingButton,
    Divider,
    FeaturesList,
    Hero,
    LandingProvider,
    MailchimpForm,
    NavBar,
    PageContainer,
    Section,
    SectionTitle,
    Footer,
} from 'landing-blocks/src'
import { Box, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { FiGlobe, FiGrid, FiImage, FiLayers } from 'react-icons/fi'
import {
    demosPaths,
    IndexCardsPaths,
    headingNavLinks,
    MAILCHIMP_URL,
    GUMROAD_PRODUCT_ID,
} from '../constants'
import { HeroIllustration } from '../svgs'
import { HeadingLogoIcon } from './_app'

const BG = '#5E629D'
const BG_IMG = 'linear-gradient(281deg, #a18aaf 0%, #5e629d 100%)'

const Page = () => (
    <LandingProvider primary='white'>
        <Stack
            pb='100px'
            // mt='-100px'
            spacing='60px'
            bg={BG}
            backgroundImage={BG_IMG}
        >
            <NavBar
                dark
                logo={<HeadingLogoIcon width='220px' long />}
                navs={headingNavLinks}
            />
            <Hero
                dark
                bullet='now available on npm'
                heading={<h1>Landing pages building blocks</h1>}
                subheading='Build your landing page in minutes using composable react components'
                image={
                    <Box
                        mr={['0', null, '-100px']}
                        width='800px'
                        as={HeroIllustration}
                    />
                }
                cta={
                    <NextLink href='#demos'>
                        <LandingButton biggerOnHover>See the demos</LandingButton>
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
                            'Every component is reusable in an infinite number of ways',
                    },
                    {
                        heading: 'Customizable',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiLayers}
                            />
                        ),
                        subheading:
                            'Every component can be integrated with your own design system',
                    },
                    {
                        heading: 'Pretty by default',
                        icon: (
                            <Box
                                style={{ strokeWidth: '1px' }}
                                size='60px'
                                as={FiImage}
                            />
                        ),
                        subheading:
                            'You get nice looking designs in minutes instead of hours',
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
                            'The components are on github, free and open source',
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
            cta={"test"}
        />
        <LandingCardsLinks alignSelf='center' py='40px' />
        <Section spacing='30px' bg={BG} backgroundImage={BG_IMG}>
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
                subheading='Awesome landing pages recreated with Landing Blocks to show its great customizability and extensibility'
                cta={"test"}
            />
            <DemosLinks alignSelf='center' py='40px' />
        </Section>
        <Banner
            // dark
            id='newsletter'
            bg='transparent'
            primary={BG}
            heading='Get notified when new components get published!'
            subheading='Every month I add new awesome components to the npm package, you will get notified as soon as they are published!'
            cta={<MailchimpForm url={MAILCHIMP_URL} />}
            fingerprint='No spam, promised'
            // bg={BG}
        />

        <Footer
            mt='200px'
            businessName='Landing Blocks'
            // dark
            // backgroundImage={BG_IMG}
            columns={{
                'Landing Blocks': [
                    <a href='https://github.com/remorses/landing-blocks'>
                        Github
                    </a>,
                    <a href='/docs'>Docs</a>,
                ],
                'Where you can find me': [
                    <a href='https://twitter.com/__morse' target='_blank'>
                        Twitter
                    </a>,
                    <a href='https://github.com/remorses/' target='_blank'>
                        Github
                    </a>,
                ],
            }}
        />
    </LandingProvider>
)



export const LandingCardsLinks = ({ ...rest }) => {
    return (
        <PageContainer>
            <Stack
                width='auto'
                justify='center'
                alignSelf='center'
                direction='row'
                flexWrap='wrap'
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
                direction='row'
                flexWrap='wrap'
                // spacing='40px'
            >
                {demosPaths.map((k, i) => {
                    const { imagePath, demoPath: urlPath } = k
                    return (
                        <Box mb='40px' key={urlPath}>
                            <Link href={urlPath}>
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
                            </Link>
                        </Box>
                    )
                })}
            </Stack>
        </PageContainer>
    )
}

export default Page

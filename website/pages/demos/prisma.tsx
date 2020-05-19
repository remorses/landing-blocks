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
} from 'landing-blocks/src'

import Highlight from 'react-highlight'

import { GradientCurtains } from 'landing-blocks/src/decorations'
import { Image, Stack, AspectRatioBox } from '@chakra-ui/core'
import { Link, Box } from '@chakra-ui/core'
import { FiCheck } from 'react-icons/fi'

const heroCode = `
// Creating a new record
await prisma.users.create({
  data: {
    firstName: "Alice",
    email: "alice@prisma.io",
    active: true,
  }
})`

const Page = () => (
    <Fragment>
        <LandingProvider primary='#48BB79'>
            <Stack
                spacing='60px'
                position='relative'
                background="url('/prisma/globe.svg') center -300px no-repeat, radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747"
                backgroundSize='cover'
            >
                <NavBar
                    dark
                    logo={
                        <Image
                            width='120px'
                            stroke='#000'
                            src='/prisma/logo.svg'
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
                    bullet='INTRODUCING PRISMA 2.0'
                    dark
                    heading={
                        <Heading maxW='600px' fontSize='50px'>
                            Modern Database Access for TypeScript & Node.js
                        </Heading>
                    }
                    subheading='Prisma is an open-source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated query builder for TypeScript & Node.js.'
                    // image={<img width='500px' src='/prisma/hero.png' />}
                    cta={<Button>Try Prisma in 5 minutes</Button>}
                    fingerprint='Already using prisma? Sign in'
                />
                <Box>
                    <Stack
                        mb='-60px'
                        spacing='100px'
                        justify='center'
                        direction='row'
                        align='center'
                    >
                        <CodeSnippet
                            shadow='lg'
                            isTyping
                            lineNumbers
                            w='500px'
                            h='300px'
                            code={heroCode}
                            language='javascript'
                        />

                        <Image
                            shadow='lg'
                            borderRadius='10px'
                            h='300px'
                            src='/prisma/databaseresult.png'
                        />
                    </Stack>
                </Box>
            </Stack>
            <Feature
                heading='Take a Quick Tour'
                subheading='Prisma is the perfect companion for building web APIs. It saves repetitive CRUD boilerplate and provides a flexible API for common use cases such as pagination and filtering.'
                image={
                    <AspectRatioBox minW='400px' w='600px'  ratio={5/3}>
                        <Box
                            borderRadius='10px'
                            shadow='lg'
                            as='iframe'
                            title='video'
                            // @ts-ignore
                            src="https://www.youtube.com/embed/0RhtQgIs-TE"
                            allowFullScreen
                        />
                    </AspectRatioBox>
                }
            />
            <Banner
                flip
                shadow='lg'
                heading='Add Prisma to Your App or Start From Scratch'
                bullet='READY TO TRY?'
                primary='#9F7AEA'
                borderTop='7px solid'
                borderTopColor='primary'
                bg='white'
                image={
                    <Image
                        ml='-60px'
                        width='200px'
                        src='/prisma/bannerImage.svg'
                    />
                }
                cta={<Button>Try Prisma in 5 minutes</Button>}
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
    </Fragment>
)

export default Page

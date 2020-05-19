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
import { Image, Stack } from '@chakra-ui/core'
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
        <Head>
            <link
                rel='stylesheet'
                href='node_modules/highlight.js/styles/atom-one-dark.css'
            />
        </Head>
        <LandingProvider primary='#48BB79'>
            <Stack spacing='60px' bg='#252D3B'>
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
                heading='Unleash your team’s creative potential with Blocks'
                subheading='prisma Blocks give you a creative palette of app-like functionality that you can mix and match to create the perfect workflow for your team.'
                image={<img src='/prisma/feature1.jpg' width='500px' />}
                flip
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

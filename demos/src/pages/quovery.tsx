import React from 'react'
import Head from 'next/head'
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
} from 'react-landing/src'
import { Box, Stack, Image } from '@chakra-ui/core'

const Page = () => (
    <LandingProvider>
        <NavBar
            bg='#323452'
            dark
            logo={
                <Stack align='center' direction='row' spacing='20px'>
                    <Image width='30px' src='/quovery/logo.png' />
                    <Box fontWeight='medium' fontSize='20px'>
                        Quovery
                    </Box>
                </Stack>
            }
            navs={[
                <a>Home</a>,
                <a>Pricing</a>,
                <a>Community</a>,
                <a>Enterprise</a>,
                <a>Blog</a>,
            ]}
        />
        <Hero
            dark
            bg='#323452'
            bullett='SUPERPOWERS FOR DEVELOPER'
            heading='Deploy complex application, seamlessly'
            subhead='Just push your code, we handle the rest'
            image={<img width='600px' src='/quovery/hero.png' />}
            cta='DEPLOY MY APPLICATION'
            fingerprint='Qovery combines the power of Kubernetes, the reliability of AWS and the simplicity of Heroku to augment the developer experience. Give a try now !'
        />
        <Feature
            heading='Fully integrated to git'
            subhead='Qovery is fully integrated to Github, Bitbucket and Gitlab. Once you have pushed your code, Qovery launches all the necessaries steps to make your application available online.'
            image={<img src='/quovery/feature1.png' width='500px' />}
        />
        <Feature
            heading='1 branch = 1 environment'
            subhead={`Every branch is an isolated environment. For instance, the "master\" branch is the production. Every new branch clones the services (databases, data, brokers..) and the apps from the source branch.`}
            image={<img src='/quovery/feature2.png' width='500px' />}
            flip
        />
        <Feature
            heading='Designed for real world applications'
            subhead={`We know that today's applications do not just have just one piece of code and a database, but multiple applications (micro-services) and multiple databases (SQL, NoSQL, Cache..). Qovery has been designed for these complex cases and manages it in an incredible way.`}
            image={<img src='/quovery/feature3.png' width='500px' />}
        />
        <HowItWorks
            heading='How Prismic works'
            subhead='A tool built to allow your content, design, and development teams to produce a finished product that they can all be proud of.'
            steps={[
                {
                    heading: 'Model your editor',
                    image: <img width='500px' src='/quovery/step1.jpg' />,
                    subhead:
                        "Model custom types to match your desired design. Create reusable fields and custom components (we call them Slices...you'll hear us talk about them a lot) to enable dynamic layouts and build the editor experience that you want",
                },
                {
                    heading:
                        'Hand over to your content team to start creating content',
                    image: <img width='500px' src='/quovery/step2.jpg' />,
                    subhead:
                        "Once you've managed the initial setup, you can hand the management over to your content team so that editors can start filling content while you're choosing the framework. With Prismic, creating beautiful content becomes simple enough that even non-technical employees can handle it. ",
                },
                {
                    heading:
                        'Deploy on Zeit Now, Netlify, Heroku or your favorite hosting platform',
                    image: <img width='500px' src='/quovery/step3.png' />,
                    subhead:
                        'We take care of hosting and scaling the publishing tools. All you have to do is host the website, but you can choose whichever hosting platform you prefer.',
                },
            ]}
        />
        <FeaturesList
            heading='Why we think Prismic is good for developers '
            features={[
                {
                    heading: 'API to fetch content',
                    icon: (
                        <img src='https://images.prismic.io/quovery-website%2F4e288d2e-66cd-4209-9ada-fbfb6f1c19c1_api.svg?auto=compress,format' />
                    ),
                    subhead:
                        'Unlike a traditional CMS, an API-based approach is much simpler and more secure. This includes options for REST, GraphQL, and SDKs that help our users to make the most of Prismic.',
                },
                {
                    heading: 'No maintenance or server setup',
                    icon: (
                        <img src='https://images.prismic.io/quovery-website%2F4080f213-f9e0-47f1-ae57-1d26874f1a08_setup.svg?auto=compress,format' />
                    ),
                    subhead:
                        "We offer a high-level SLAs, scalability, and a global CDN. We'll make sure that everything is running smoothly in the background so that you can focus on your projects.",
                },
                {
                    heading: 'A growing ecosystem',
                    icon: (
                        <img src='https://images.prismic.io/quovery-website%2F4268d459-cec4-4e46-856b-d2eaba8d71f8_ecosystem.svg?auto=compress,format' />
                    ),
                    subhead:
                        'Built by developers for developers - we actively engage with the community. Enjoy content that is created specifically for our community and join our Slack to discuss your Prismic projects.',
                },
            ]}
            backgroundColor='gray.100'
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

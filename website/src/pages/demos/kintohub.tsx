import React from 'react'
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
    TestimonialsLogos,
    SectionTitle,
    Button,
} from 'react-landing/src'
import { Box, Stack, Image } from '@chakra-ui/core'

const Page = () => (
    <LandingProvider primary='white'>
        <Stack
            spacing='60px'
            background='linear-gradient(-225deg,#9a7ced,#9c78e4 24%,#7777f7 50%,#547eff 75%,#2a91cc)'
            pb='40px'
        >
            <NavBar
                dark
                bg='rgba(255,255,255,.1)'
                logo={<Image width='200px' src='/kintohub/whitelogo.svg' />}
                py='20px'
                navs={[
                    <a>Home</a>,
                    <a>Pricing</a>,
                    <a>Community</a>,
                    <a>Enterprise</a>,
                    <a>Blog</a>,
                    <Button px='10px'>Sign up</Button>,
                ]}
            />
            <Hero
                dark
                pb='0px'
                heading='Develop. Combine. Promote.'
                subheading='KintoHub is an all-in-one platform to combine and deploy your backend services, websites, cron jobs, databases and everything your app needs in one place.'
                image={
                    <Box mb='-100px' mr='-200px'>
                        <Image
                            alignSelf='flex-end'
                            minWidth='800px'
                            maxWidth='800px'
                            src='/kintohub/hero.png'
                        />
                    </Box>
                }
                // image={
                //     <Stack position='relative' width='700px' h='100%'>
                //         <Image
                //             position='absolute'
                //             bottom='0'
                //             left='-100px'
                //             src='/kintohub/hero2.svg'
                //         />
                //         <Image zIndex={100} src='/kintohub/hero1.svg' />
                //     </Stack>
                // }
                cta={
                    <Button>
                        <Stack direction='row' align='center'>
                            <Box>Deploy Free</Box>
                            <img src='/kintohub/arrow.svg' />
                        </Stack>
                    </Button>
                }
                fingerprint='No credit card required.'
            />
        </Stack>
        <HowItWorks
            heading='How Kintohub works'
            subheading='A tool built to allow your content, design, and development teams to produce a finished product that they can all be proud of.'
            steps={[
                {
                    heading: 'Model your editor',
                    image: <img width='500px' src='/kintohub/step1.svg' />,
                    subheading:
                        "Model custom types to match your desired design. Create reusable fields and custom components (we call them Slices...you'll hear us talk about them a lot) to enable dynamic layouts and build the editor experience that you want",
                },
                {
                    heading:
                        'Hand over to your content team to start creating content',
                    image: <img width='500px' src='/kintohub/step2.svg' />,
                    subheading:
                        "Once you've managed the initial setup, you can hand the management over to your content team so that editors can start filling content while you're choosing the framework. With Prismic, creating beautiful content becomes simple enough that even non-technical employees can handle it. ",
                },
                {
                    heading:
                        'Deploy on Zeit Now, Netlify, Heroku or your favorite hosting platform',
                    image: <img width='500px' src='/kintohub/step3.svg' />,
                    subheading:
                        'We take care of hosting and scaling the publishing tools. All you have to do is host the website, but you can choose whichever hosting platform you prefer.',
                },
            ]}
        />
        <Feature
            heading='Fully integrated to git'
            subheading='Qovery is fully integrated to Github, Bitbucket and Gitlab. Once you have pushed your code, Qovery launches all the necessaries steps to make your application available online.'
            image={<img src='/kintohub/feature1.svg' width='500px' />}
            bg='#F8F8FF'
        />

        <Footer
            businessName='Quovery'
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

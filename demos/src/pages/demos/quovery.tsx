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
    TestimonialsLogos,
    SectionTitle,
    Button,
    EmailForm,
} from 'react-landing/src'
import { Box, Stack, Image } from '@chakra-ui/core'

const Page = () => (
    <LandingProvider primary='white'>
        <Stack spacing='60px' bg='#323452' pb='100px'>
            <NavBar
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
                    <Button px='10px'>Sign up</Button>
                ]}
            />
            <Hero
                dark
                bullet='SUPERPOWERS FOR DEVELOPER'
                heading='Deploy complex application, seamlessly'
                subhead='Just push your code, we handle the rest'
                image={<img width='600px' src='/quovery/hero.png' />}
                // cta={<Button>DEPLOY MY APPLICATION</Button>}
                cta={<EmailForm />}
                fingerprint='Qovery combines the power of Kubernetes, the reliability of AWS and the simplicity of Heroku to augment the developer experience. Give a try now !'
            />
            <Divider heading='DEVELOPERS FROM GREAT COMPANIES TRUST US' dark />
            <TestimonialsLogos
                testimonials={[
                    <img src='/quovery/google.png' />,
                    <img src='/quovery/datadog.png' />,
                    <img src='/quovery/itiviti.png' />,
                    <img src='/quovery/redhat.png' />,
                    <img src='/quovery/criteol.png' />,
                ]}
            />
        </Stack>
        <SectionTitle
            heading='Deploy your application with ease'
            subhead='Deploying an application with Qovery is as simple as pushing code with git'
            image={null}
        />
        <Feature
            heading='Fully integrated to git'
            subhead='Qovery is fully integrated to Github, Bitbucket and Gitlab. Once you have pushed your code, Qovery launches all the necessaries steps to make your application available online.'
            image={<img src='/quovery/feature1.png' width='500px' />}
            bg='#F8F8FF'
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
            bg='#F8F8FF'
        />

        <FeaturesList
            heading='Built for developers'
            subhead='Designed by developers for developers for real world applications'
            centerText
            features={[
                {
                    heading: 'CLI',
                    icon: (
                        <img src='https://images.prismic.io/prismic-website%2F4e288d2e-66cd-4209-9ada-fbfb6f1c19c1_api.svg?auto=compress,format' />
                    ),
                    subhead:
                        'We provide an amazing Command Line Interface (CLI) to manage all your services when needed. The interface has been designed to be instinctively usable.',
                },
                {
                    heading: 'Support micro-services',
                    icon: (
                        <img src='https://images.prismic.io/prismic-website%2F4080f213-f9e0-47f1-ae57-1d26874f1a08_setup.svg?auto=compress,format' />
                    ),
                    subhead:
                        'Projects with multiple applications (micro-services) are supported natively by Qovery. We take care of all the plumbing for you (network, resiliency, deployment).',
                },
                {
                    heading: 'Built on AWS',
                    icon: (
                        <img src='https://images.prismic.io/prismic-website%2F4268d459-cec4-4e46-856b-d2eaba8d71f8_ecosystem.svg?auto=compress,format' />
                    ),
                    subhead:
                        'Qovery rely on the best services (Databases, VPC, Security..) provided by Amazon Web Services. But of course, we take care of all of the complexity of these services for you.',
                },
            ]}
        />
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

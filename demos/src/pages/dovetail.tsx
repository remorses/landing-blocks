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
    SectionTitle,
    TestimonialsLogos,
} from 'react-landing/src'
import { Button } from 'react-landing/src/Button'
import { GradientRect, CurlyWire } from 'react-landing/src/decorations'

// background: linear-gradient(45deg,#e9fcff 30%,#fdf2ed 60%);
// FF593D

const Page = () => (
    <LandingProvider primary='#5A38AC'>
        <NavBar
            logo={<img width='120px' src='/dovetail/logo.svg' />}
            navs={[
                <a>Why DatoCMS</a>,
                <a>Learn</a>,
                <a>Marketplace</a>,
                <a>Pricing</a>,
                <Button>try for free!</Button>,
            ]}
        />
        <Hero
            heading={'Make analysis enjoyable'}
            subhead='Discover patterns across a variety of qualitative research methods and unstructured data. Dovetail is analysis software you’ll love to use.'
            image={<img src='/dovetail/hero.png' />}
            cta='Try free for 7 days'
        />
        <FeaturesList
            heading=''
            floatingElement={<CurlyWire opacity={.1} stroke='#5A38AC' maxW='pageContainer' />}
            features={[
                {
                    heading: 'Make sense of data',
                    subhead:
                        'Dovetail is a powerful way to discover patterns across interviews, usability testing, survey responses, and more',
                    icon: <img width='60px' src='dovetail/feature1.svg' />,
                },
                {
                    heading: 'Build your taxonomy',
                    subhead:
                        'Organize tags into a hierarchy with intuitive controls like drag & drop, and extend your project with global tags.',
                    icon: <img width='60px' src='dovetail/feature2.svg' />,
                },
                {
                    heading: 'Visualize your research',
                    subhead:
                        'Turn qualitative data into quantitative data with highlights, and visualize your work with a variety of beautiful charts.',
                    icon: <img width='60px' src='dovetail/feature3.svg' />,
                },
            ]}
        />
        <TestimonialsLogos
            testimonials={[
                <img src='dovetail/dropbox.svg' />,
                <img src='dovetail/hashicorp.svg' />,
                <img src='dovetail/verizon.svg' />,
                <img src='dovetail/vmware.svg' />,
                <img src='dovetail/linkedin.svg' />,
            ]}
        />
        <SectionTitle
            heading={
                <Heading
                    fontFamily='tiempos-headline, Georgia'
                    fontSize='60px'
                    fontWeight='semibold'
                >
                    Are you losing money because of legacy content
                    infrastructure?
                </Heading>
            }
            subhead='HERE’S 3 SYMPTOMS TO WATCH OUT'
            image={null}
            floatingElement={
                <GradientRect
                    maxW='pageContainer'
                    width='60%'
                    distortion={-0.3}
                />
            }
        />
        <Feature
            heading='Is content spread across endless different CMSs?'
            subhead='How can you deliver a cohesive brand and message strategy if your company functions in silos and information is manually copy-pasted across tens of different platforms?'
            image={<img src='/dovetail/illustration1.svg' width='400px' />}
            flip
        />
        <Feature
            heading='Are you slowed down by legacy technology?'
            subhead='Your customers demand blazing-fast digital products, web standards are evolving at the speed of light, yet you rely on 15-years-old solutions like Wordpress that force you to deliver heavy, low-quality user experiences.'
            image={<img src='/dovetail/illustration2.svg' width='400px' />}
        />
        <Feature
            heading='Is your infrastructure ready for scale?'
            subhead='New channels, new markets, complex use cases, fast iterations. You can no longer afford to think locally. You need to have a reliable solution that is capable of following your growth, globally, and lets you adapt along the journey.'
            image={<img src='/dovetail/illustration3.svg' width='400px' />}
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
)

export default Page

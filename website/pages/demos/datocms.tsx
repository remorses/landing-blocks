import { Feature, FeaturesList, Footer, Heading, Hero, LandingProvider, NavBar, SectionTitle, TestimonialsLogos } from 'landing-blocks/src'
import { Button } from 'landing-blocks/src/Button'
import { GradientRect } from 'landing-blocks/src/decorations'
import { MailchimpForm } from 'landing-blocks/src/EmailForm'
import React from 'react'

// background: linear-gradient(45deg,#e9fcff 30%,#fdf2ed 60%);
// FF593D

const Page = () => (
    <LandingProvider black='#000' white='#fff' primary='#FF593D'>
        <NavBar
            logo={<img width='120px' src='/datocms/logo.svg' />}
            navs={[
                <a>Why DatoCMS</a>,
                <a>Learn</a>,
                <a>Marketplace</a>,
                <a>Pricing</a>,
                <Button>try for free!</Button>,
            ]}
        />
        <Hero
            heading={
                <Heading
                    fontFamily='tiempos-headline, Georgia'
                    fontSize='74px'
                    fontWeight='bold'
                >
                    The best companies are built on unified content
                </Heading>
            }
            subheading='More than 4.000 businesses use DatoCMS to create their online content at scale from a central hub, and distribute it easily via API to websites and any other digital experience.'
            image={null}
            // cta={<Button>Try it now for free!</Button>}
            cta={
                <MailchimpForm url='https://gmail.us20.list-manage.com/subscribe/post?u=7a2ded8c33767b20e6fe824c0&amp;id=e774d6f31e' />
            }
            floatingElement={
                <GradientRect maxW='pageContainer' distortion={0.3} />
            }
        />
        <TestimonialsLogos
            testimonials={[
                <img src='/datocms/dropbox.svg' />,
                <img src='/datocms/hashicorp.svg' />,
                <img src='/datocms/verizon.svg' />,
                <img src='/datocms/vmware.svg' />,
                <img src='/datocms/linkedin.svg' />,
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
            subheading='HERE’S 3 SYMPTOMS TO WATCH OUT'
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
            subheading='How can you deliver a cohesive brand and message strategy if your company functions in silos and information is manually copy-pasted across tens of different platforms?'
            image={<img src='/datocms/illustration1.svg' width='400px' />}
            flip
        />
        <Feature
            heading='Are you slowed down by legacy technology?'
            subheading='Your customers demand blazing-fast digital products, web standards are evolving at the speed of light, yet you rely on 15-years-old solutions like Wordpress that force you to deliver heavy, low-quality user experiences.'
            image={<img src='/datocms/illustration2.svg' width='400px' />}
        />
        <Feature
            heading='Is your infrastructure ready for scale?'
            subheading='New channels, new markets, complex use cases, fast iterations. You can no longer afford to think locally. You need to have a reliable solution that is capable of following your growth, globally, and lets you adapt along the journey.'
            image={<img src='/datocms/illustration3.svg' width='400px' />}
            flip
        />
        <FeaturesList
            heading=''
            centerText
            features={[
                {
                    heading: (
                        <Heading fontWeight='semibold' fontSize='82px'>
                            -79%
                        </Heading>
                    ),
                    subheading: 'In operational cost',
                },
                {
                    heading: (
                        <Heading fontWeight='semibold' fontSize='82px'>
                            2x
                        </Heading>
                    ),
                    subheading: 'Faster time to market',
                },
                {
                    heading: (
                        <Heading fontWeight='semibold' fontSize='82px'>
                            8x
                        </Heading>
                    ),
                    subheading: 'Faster loading times',
                },
            ]}
            bg='gray.100'
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

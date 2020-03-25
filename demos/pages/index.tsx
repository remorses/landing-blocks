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
} from 'react-landing/src'

const Page = () => (
    <LandingProvider>
        <Hero
            heading='Make your website editable for the whole team'
            subhead='Choose your technology. Use the API to fetch content. Empower
        your content team.'
            image={<img src='/code.png' />}
            cta='Test it out'
        />
        <Feature
            heading='Prismic is a Content Management System, a tool for editing online content'
            subhead="Also known as a headless CMS, an API CMS, a content platform, a disruptive content-as-a-service digital experience...basically we've built a tool that lets you choose your technology, framework, and language and then easily manage your content."
            image={<img src='feature1.jpg' width='500px' />}
            backgroundColor='gray.100'
            flip
        />
        <HowItWorks
            heading='How Prismic works'
            subhead='A tool built to allow your content, design, and development teams to produce a finished product that they can all be proud of.'
            steps={[
                {
                    heading: 'Model your editor',
                    image: <img width='500px' src='step1.jpg' />,
                    subhead:
                        "Model custom types to match your desired design. Create reusable fields and custom components (we call them Slices...you'll hear us talk about them a lot) to enable dynamic layouts and build the editor experience that you want",
                },
                {
                    heading:
                        'Hand over to your content team to start creating content',
                    image: <img width='500px' src='step2.jpg' />,
                    subhead:
                        "Once you've managed the initial setup, you can hand the management over to your content team so that editors can start filling content while you're choosing the framework. With Prismic, creating beautiful content becomes simple enough that even non-technical employees can handle it. ",
                },
                {
                    heading:
                        'Deploy on Zeit Now, Netlify, Heroku or your favorite hosting platform',
                    image: <img width='500px' src='step3.png' />,
                    subhead:
                        'We take care of hosting and scaling the publishing tools. All you have to do is host the website, but you can choose whichever hosting platform you prefer.',
                },
            ]}
        />
    </LandingProvider>
)

export default Page

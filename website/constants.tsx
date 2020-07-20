import * as landingCards from './svgs/landingCards'
import React from 'react'
import { MyLink } from './pages/_app'
import { GithubLink } from 'dokz'

export const GUMROAD_PRODUCT_ID = 'XJbw'

export const DEMOS_WEBSITE = 'https://landing-blocks-demos.now.sh'

export const headingNavLinks = [
    <MyLink href='/#components'>Components</MyLink>,
    <MyLink href='/docs'>Docs</MyLink>,
    <MyLink href='/#demos'>Demos</MyLink>,
    <MyLink href='/#newsletter'>Newsletter</MyLink>,
    // <GithubLink url='https://github.com/remorses/landing-blocks' />,
]

const BASE_PATH = '/docs/components/'

export const IndexCardsPaths = [
    { icon: landingCards.Hero, title: 'Hero', path: BASE_PATH + 'hero' },
    {
        icon: landingCards.Feature,
        title: 'Feature',
        path: BASE_PATH + 'feature',
    },
    {
        icon: landingCards.FeatureList,
        title: 'Features List',
        path: BASE_PATH + 'featuresList',
    },
    {
        icon: landingCards.FeaturesGrid,
        title: 'Features Grid',
        path: BASE_PATH + 'featuresGrid',
    },
    { icon: landingCards.Footer, title: 'Footer', path: BASE_PATH + 'footer' },
    {
        icon: landingCards.HowItWorks,
        title: 'How It Works',
        path: BASE_PATH + 'howItWorks',
    },
    { icon: landingCards.NavBar, title: 'Nav Bar', path: BASE_PATH + 'navBar' },
    {
        icon: landingCards.TestimonialsLogos,
        title: 'TestimonialsLogos',
        path: BASE_PATH + 'testimonialsLogos',
    },
    {
        icon: landingCards.TopBanner,
        title: 'TopBanner',
        path: BASE_PATH + 'topBanner',
    },
    {
        icon: landingCards.Text,
        title: 'SectionTitle',
        path: BASE_PATH + 'sectionTitle',
    },
    {
        icon: landingCards.Faq,
        title: 'Faqs',
        path: BASE_PATH + 'faqs',
    },
    {
        icon: landingCards.Pricing,
        title: 'Pricing',
        path: BASE_PATH + 'pricing',
    },
    {
        icon: landingCards.Tweets,
        title: 'TestimonialsTweets',
        path: BASE_PATH + 'testimonialsTweets',
    },
    {
        icon: landingCards.Banner,
        title: 'Banner',
        path: BASE_PATH + 'banner',
    },
    {
        icon: landingCards.Countdown,
        title: 'Countdown',
        path: BASE_PATH + 'countdown',
    },
]

export const demosPaths = [
    'segment',
    'datocms',
    'dovetail',
    'prismic',
    'prisma',
    'qovery',
    'rocketchat',
    'spendesk',
    'testim',
    'kintohub',
    'airtable',
].map((name) => {
    return {
        url: DEMOS_WEBSITE + '/demos/' + name, // TODO add different
        demoPath: '/demo_roll/' + name, // TODO add different

        imagePath: `screens/${name}.jpeg`,
    }
})

export const MAILCHIMP_URL =
    'https://gmail.us20.list-manage.com/subscribe/post?u=7a2ded8c33767b20e6fe824c0&amp;id=e774d6f31e'

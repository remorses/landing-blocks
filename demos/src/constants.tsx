import * as landingCards from './svgs/landingCards'

const BASE_PATH = '/docs/'
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
        title: '<Pricing/>',
        path: BASE_PATH + 'pricing',
    },
    {
        icon: landingCards.Tweets,
        title: '<TestimonialsTweets/>',
        path: BASE_PATH + 'testimonialsTweets',
    },
]

export const demosPaths = [
    { urlPath: 'demos/datocms', imagePath: 'screens/datocms.jpeg' },
    { urlPath: 'demos/dovetail', imagePath: 'screens/dovetail.jpeg' },
    { urlPath: 'demos/prismic', imagePath: 'screens/prismic.jpeg' },
    { urlPath: 'demos/quovery', imagePath: 'screens/qovery.jpeg' },
    { urlPath: 'demos/rocketchat', imagePath: 'screens/rocketchat.jpeg' },
    { urlPath: 'demos/spendesk', imagePath: 'screens/spendesk.jpeg' },
    { urlPath: 'demos/testim', imagePath: 'screens/testim.jpeg' },
    { urlPath: 'demos/kintohub', imagePath: 'screens/kintohub.jpeg' },
    { urlPath: 'demos/airtable', imagePath: 'screens/airtable.jpeg' },
]

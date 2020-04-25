<div align='center'>
  <br/>
    <br/>
    <img src='https://landing-blocks.now.sh/logo_black.svg' width='300px' />
    <br/>
    <h3>Landing pages building blocks</h3>
    <br/>
    <br/>
</div>

Landing blocks is an npm package that groups together many useful components that can be composed together to create beautiful landing pages.

## Install

```sh
yarn add landing-blocks
```

## Usage

Every component represents a section of your landing page, compose them together to get the perfect landing page.

```jsx
import React from 'react'
import {
    LandingProvider,
    Hero,
    Heading,
    NavBar,
    Button,
    Footer,
} from 'landing-blocks'

export default () => (
    <LandingProvider>
        <NavBar
            logo={<img width='120px' src='/logo.svg' />}
            navs={[
                <a>Features</a>,
                <a>Use Cases</a>,
                <a>Pricing</a>,
                <a>About Us</a>,
                <a>Login</a>,
            ]}
        />
        <Hero
            heading='Make your website editable for the whole team'
            subheading='Choose your technology. Use the API to fetch content. Empower
        your content team.'
            image={<img width='500px' src='/code.png' />}
            cta={<Button>Test it out</Button>}
        />
        <Feature
            heading='YourName is an awesome product'
            subheading='Awesome subheading'
            image={<img src='/feature1.jpg' width='500px' />}
            bg='gray.100'
        />
        <Feature
            heading='YourName is an awesome product'
            subheading='Awesome subheading'
            image={<img src='/feature1.jpg' width='500px' />}
            flip
        />
        <Footer
            businessName='YourName'
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
```

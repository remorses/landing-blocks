<div align='center'>
  <br/>
    <br/>
<h1> react-landing </h1>
    <br/>
    <br/>
    <br/>
  <pre>npm i react-landing</pre>
</div>

## how to manage multiple styles for the same component

for every component type make a folder, the index will be the component types and structure
other files will have other variations of the same component with changes in layout, icons used, font sizes, background styling, ...
each variation will still be customizable with theme colors, fonts and you can replace certain illustration and icons (the decorations and animations will be built in)

## switch between dark and light backgrounds

all the texts will have a color that changes based on the background brightness to maintain always the max contrast, the same with icons fill and stroke

## customize content

to change content you can use object props and not compound components because object props are more easily discoverable and typed

## themeable

colors - primary (primary color for cta buttons, certain decoration elements, illustrations, icons ) - black, used for text, - primary background, the page background - secondary background, break certain sections with darker look
font

## What

The assets are only svg and fonts, schema are unlined in code, fonts are taken with google fonts

All components are implemented with chakra ui and boxes, and the components that need css styling with emotion styled as wrapper component

Dead code elimination is done via web pack in client, thanks to exported modules from typescript

## Why

-   themeable
-   extensible
-   maintenable
-   evolvable

-   Easily integrate with your existing react components
-   Evolve your codebase more easily
-   Extend with your own code and style
-   Switch between design style changing a single prop

## Features

-   easily integrate with headless CMS
-   theme colors, fonts, illustrations colors, icons colors
-   integrate with illustrations
-   super lightweight components, only inline svgs and css in js
-   tree shakeable
-   self contined css via styled system
-   animations built in

## components

-   FeatureSection

-   HeroSection

-   CtaSection

-   FooterSection

-   TestimonialsLogos
-   TestimonialsTweets
-   TestimonialQuotes

-   Faq

-   HowItWorks

-   FeaturesGrid
-   FeatureList

-   MockUp, add image inside laptop or phone
-   Illustration, pre defined illustrations

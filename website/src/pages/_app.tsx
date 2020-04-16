import NextLink from 'next/link'
import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz/dist'
import React from 'react'
import { useMyColorMode } from 'landing-blocks/src/hooks'
import { Link, Stack, Box, useColorMode } from '@chakra-ui/core'
import { Footer } from 'landing-blocks/src'
import { LogoIcon, LogoIconBlack } from '../svgs'
import * as LandingStuff from 'landing-blocks/src'
import * as LandingDecorationsStuff from 'landing-blocks/src/decorations'

export default (props) => {
    const { Component, pageProps } = props
    return (
        <DokzProvider
            headerItems={[
                headingNavLinks,
                <GithubLink key='0' url='https://github.com/remorses/dokz' />,
                <ColorModeSwitch key='1' />,
            ]}
            playgroundScope={{ ...LandingStuff, ...LandingDecorationsStuff }}
            headerLogo={<HeadingLogoIcon width='36px' opacity={0.6} />}
            sidebarOrdering={{
                // sidebar ordering
                'index.mdx': null,
                Documents_Group: {
                    'another.mdx': null,
                },
            }}
        >
            <Component {...pageProps} />
        </DokzProvider>
    )
}

export const headingNavLinks = (
    <Stack isInline spacing='20px'>
        <MyLink href='/#components'>Components</MyLink>
        <MyLink href='/#demos'>Demos</MyLink>
        <MyLink href='#'>Newsletter</MyLink>,
        <Box />
    </Stack>
)

export function MyFooter({ ...rest }) {
    return (
        <Footer
            businessName='Landing Blocks'
            columns={{
                Developers: [
                    <MyLink href='#'>Components</MyLink>,
                    <MyLink href='#'>Components</MyLink>,
                    <MyLink href='#'>Components</MyLink>,
                ],
                Company: [<MyLink href='#'>Components</MyLink>],
                Product: [<MyLink href='#'>Components</MyLink>],
            }}
            {...rest}
        />
    )
}

export function MyLink({ href, ...rest }) {
    const { colorMode } = useMyColorMode(rest)
    return (
        <NextLink href={href} passHref {...rest}>
            <Link
                // color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        </NextLink>
    )
}

function MyBreadcrumbs({ items, ...rest }) {
    return (
        <Stack direction='row' spacing='10px' align='center' {...rest}>
            {items.map((x, i) => (
                <Stack
                    opacity={0.6}
                    fontWeight='medium'
                    direction='row'
                    align='center'
                    spacing='10px'
                >
                    <Box>{x}</Box>
                    {i !== items.length - 1 && <Box>></Box>}
                </Stack>
            ))}
        </Stack>
    )
}

export const HeadingLogoIcon = (props) => {
    const { colorMode } = useColorMode()
    return (
        <Box
            as={colorMode === 'dark' ? LogoIcon : LogoIconBlack}
            width='36px'
            {...props}
        />
    )
}

import { useColorMode } from '@chakra-ui/core'
import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'
import { Footer } from 'landing-blocks/src/Footer'
import { useMyColorMode } from 'landing-blocks/src/hooks'
import { Box, Stack } from 'layout-kit-react'
import NextLink from 'next/link'
import { Link } from 'landing-blocks/src'
import React from 'react'
import { LogoBlack, LogoIcon, LogoIconBlack, LogoWhite } from '../svgs'
import { useRouter } from 'next/router'
import { headingNavLinks } from '../constants'

export default function App(props) {
    const { Component, pageProps } = props
    const { pathname } = useRouter()
    if (pathname.startsWith('/docs')) {
        return (
            <DokzProvider
                docsRootPath='pages/docs'
                headerItems={[
                    ...headingNavLinks,
                    // <ColorModeSwitch />,
                    // <ColorModeSwitch key='1' />,
                ]}
                headerLogo={<HeadingLogoIcon width='36px' opacity={0.8} />}
                mdxComponents={{
                    img: (p) => <img {...p} />,
                    a: (p) => <p {...p} />,
                }}
                sidebarOrdering={{
                    // sidebar ordering
                    demos: false,
                    docs: {
                        index: true,
                        components: {
                            hero: true,
                            feature: true,
                            featuresList: true,
                            howItWorks: true,
                            footer: true,
                            banner: true,
                        },
                    },
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        )
    }
    return <Component {...pageProps} />
}

export function MyLink({ href, ...rest }) {
    const { colorMode } = useMyColorMode(rest)
    return (
        <NextLink href={href} passHref {...rest}>
            <Link
                fontWeight='medium'
                // color='black'
                // color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        </NextLink>
    )
}

export const HeadingLogoIcon = ({ long = false, ...props }) => {
    const { colorMode } = useColorMode()
    const dark = colorMode === 'dark'
    return (
        <NextLink href='/'>
            <Box
                cursor='pointer'
                as={
                    long
                        ? dark
                            ? LogoWhite
                            : LogoBlack
                        : dark
                        ? LogoIcon
                        : LogoIconBlack
                }
                width='36px'
                {...props}
            />
        </NextLink>
    )
}

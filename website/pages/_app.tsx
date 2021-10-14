import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Footer } from 'landing-blocks/src/Footer'
import { useMyColorMode } from 'landing-blocks/src/hooks'
import { Box, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from 'landing-blocks/src'
import React from 'react'
import { LogoBlack, LogoIcon, LogoIconBlack, LogoWhite } from '../svgs'
import { useRouter } from 'next/router'
import { headingNavLinks } from '../constants'

export default function App(props) {
    const { Component, pageProps } = props
    const { pathname } = useRouter()
    
    return (
        <ChakraProvider resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    )
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

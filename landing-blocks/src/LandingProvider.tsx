import {
    ColorModeProvider,
    CSSReset,
    DefaultTheme,
    FlexProps,
    Stack,
    ThemeProvider,
    theme as chakraTheme,
    useColorMode,
    DarkMode,
} from '@chakra-ui/core'
import React, { useMemo, Fragment } from 'react'
import { PropagatedThemeProvider } from './layout'
import merge from 'lodash/fp/merge'
import { css, Global } from '@emotion/core'

export interface ThemeExtension extends DefaultTheme {
    colors: {
        primary: string
        secondary: string
    } & DefaultTheme['colors']
    sizes: {
        pageContainer: any
    } & DefaultTheme['sizes']
}

export type LandingProviderProps = {
    dark?: boolean
    primary?: string
    black?: string
    white?: string
    secondary?: string
    pageWidth?: string
    children?: any
} & FlexProps

/*
should customize 
- font type
- font family
- buttons border radius
- primary color for buttons, illustrations, etc
- secondary color, for gradients, etc
- dark background mode
- black color for text, ...
- white color for text, ... if dark mode
*/

export function LandingProvider({
    dark = undefined,
    primary = 'purple',
    black = '#222',
    white = '#fff',
    secondary = 'purple',
    pageWidth = '1200px',
    fontFamily = 'Roboto, system-ui, sans-serif',
    children,
    ...rest
}: LandingProviderProps) {
    const { colorMode } = useColorMode()
    const Mode = dark ? DarkMode : Fragment
    dark = dark ?? colorMode === 'dark'
    const theme = useMemo(
        () =>
            merge(chakraTheme, {
                colors: {
                    primary,
                    secondary,
                    black,
                    white,
                },
                sizes: {
                    pageContainer: pageWidth,
                },
                fonts: {
                    body: fontFamily,
                    heading: fontFamily,
                },
                fontSizes: {
                    text: '18px',
                    heading: '36px',
                    subheading: '24px',
                    subtext: '14px',
                },
            }),
        [pageWidth, primary, secondary],
    )
    return (
        <PropagatedThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Mode>
                <CSSReset />
                <Stack
                    // overflowX='hidden'
                    fontFamily={fontFamily}
                    spacing='60px'
                    color={dark ? 'white' : 'black'}
                    borderColor={dark ? 'rgba(255,255,255,.3)' : 'gray.300'}
                    {...rest}
                >
                    {children}
                </Stack>
            </Mode>
        </PropagatedThemeProvider>
    )
}

const globalStyles = css`
    * {
        box-sizing: border-box;
    }
    html {
        overflow: hidden;
        height: 100%;
        scroll-behavior: smooth;
    }
    body {
        height: 100%;
        overflow: auto;
    }
`

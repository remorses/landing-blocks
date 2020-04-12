import {
    ColorModeProvider,
    CSSReset,
    DefaultTheme,
    FlexProps,
    Stack,
    ThemeProvider,
    useColorMode,
    DarkMode,
} from '@chakra-ui/core'
import React, { useMemo, Fragment } from 'react'
import { PropagatedThemeProvider } from './layout'

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
    children,
    ...rest
}: LandingProviderProps) {
    const { colorMode } = useColorMode()
    const Mode = dark ? DarkMode : Fragment
    dark = dark ?? colorMode === 'dark'
    const theme = useMemo(
        () => ({
            colors: {
                primary,
                secondary,
                black,
                white,
            },
            sizes: {
                pageContainer: pageWidth,
            },
        }),
        [pageWidth, primary, secondary],
    )
    return (
        <PropagatedThemeProvider theme={theme}>
            <Mode>
                <CSSReset />
                <Stack
                    // overflowX='hidden'
                    fontFamily='Roboto, Arial'
                    spacing='60px'
                    color={dark ? 'white' : 'black'}
                    {...rest}
                >
                    {children}
                </Stack>
            </Mode>
        </PropagatedThemeProvider>
    )
}

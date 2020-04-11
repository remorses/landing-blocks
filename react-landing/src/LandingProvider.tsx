import {
    ColorModeProvider,
    CSSReset,
    DefaultTheme,
    FlexProps,
    Stack,
    ThemeProvider,
} from '@chakra-ui/core'
import React, { useMemo } from 'react'
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
    dark = false,
    primary = 'purple',
    secondary = 'purple',
    pageWidth = '1200px',
    children,
    ...rest
}: LandingProviderProps) {
    const theme = useMemo(
        () => ({
            colors: {
                primary,
                secondary,
            },
            sizes: {
                pageContainer: pageWidth,
            },
        }),
        [pageWidth, primary, secondary],
    )
    return (
        <PropagatedThemeProvider theme={theme}>
            <ColorModeProvider value={dark ? 'dark' : 'light'}>
                <CSSReset />
                <Stack
                    overflowX='hidden'
                    fontFamily='Roboto, Arial'
                    spacing='60px'
                    {...rest}
                >
                    {children}
                </Stack>
            </ColorModeProvider>
        </PropagatedThemeProvider>
    )
}

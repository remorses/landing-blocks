import React from 'react'
export { Hero } from './Hero'
export { Heading } from './Heading'
export { SubHeading } from './SubHeading'
export { Feature } from './Feature'
export { HowItWorks } from './HowItWorks'
export * from './layout'
import {
    ThemeProvider,
    theme as defaultTheme,
    DefaultTheme,
    Stack,
} from '@chakra-ui/core'
import { useTheme } from 'emotion-theming'

export const LandingProvider = ({ children }) => {
    const existingTheme = useTheme()
    if (existingTheme && Object.keys(existingTheme).length) {
        console.log(existingTheme)
        return children
    }
    const theme: DefaultTheme = {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors,
            primary: 'purple',
        } as any,
        fonts: {
            ...defaultTheme.fonts,
            body: 'Roboto',
        },
    }
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={24}>{children}</Stack>
        </ThemeProvider>
    )
}

import { DarkMode } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from '@chakra-ui/react'
import { Box, Flex, StackProps, Stack } from '@chakra-ui/react'
import merge from 'lodash/fp/merge'
import React, { FC, forwardRef, Fragment, useMemo } from 'react'

export const Col: any = forwardRef((props, ref) => {
    return (
        <Flex align='stretch' ref={ref as any} direction='column' {...props} />
    )
})

export { Stack, Box } from '@chakra-ui/react'
export { Image } from '@chakra-ui/react'

export const Row: any = forwardRef((props, ref) => {
    return <Flex align='stretch' ref={ref as any} direction='row' {...props} />
})

export const Spacer = ({ x = '0px', y = '0px' }) => {
    return <Box mt={y} ml={x} />
}

export const darkStyles = {
    // bg: 'gray.800',
    color: 'whiteAlpha.900',
    borderColor: 'whiteAlpha.300',
    placeholder: 'whiteAlpha.400',
}

// export function withColorMode(C) {
//     return (p: any) => {
//         const Mode = p.dark ? DarkMode : Fragment
//         const styles = p.dark ? darkStyles : {}
//         return (
//             <Mode>
//                 <C {...p} />
//             </Mode>
//         )
//     }
// }

export function PropagatedThemeProvider({ theme, children }) {
    let existingTheme = {}
    try {
        existingTheme = useTheme()
    } catch {}

    // console.log({ existingTheme: existingTheme.sizes })
    const merged = useMemo(() => {
        return merge(existingTheme || {}, theme)
    }, [theme, existingTheme])
    return <ThemeProvider theme={merged}>{children}</ThemeProvider>
}

export type PageContainerProps = {
    floatingElement?: any
    dark?: boolean
    primary?: string
    pageWidth?: string
} & StackProps

export const PageContainer: FC<PageContainerProps> = forwardRef(
    // TODO rename to SectionContainer
    (
        {
            children,
            spacing = '0px',
            floatingElement = null,
            dark = false,
            primary = undefined,
            pageWidth = undefined,
            ...props
        },
        ref,
    ) => {
        const Mode = dark ? DarkMode : Fragment
        const styles = dark ? darkStyles : {}
        const theme = useMemo(
            () => ({
                colors: {
                    primary,
                },
                sizes: {
                    pageContainer: pageWidth,
                },
            }),
            [pageWidth, primary],
        )
        return (
            <Col
                position='relative'
                ref={ref as any}
                width='100%'
                px='pagePadding'
                align='center'
                {...styles}
                {...props}
            >
                <PropagatedThemeProvider theme={theme}>
                    <Mode>
                        <Col
                            position='absolute'
                            width='100%'
                            top='0'
                            left='0'
                            right='0'
                            bottom='0'
                            align='center'
                            justify='center'
                            // overflow='hidden'
                        >
                            {floatingElement}
                        </Col>
                        <Stack
                            zIndex={1}
                            align='stretch'
                            // px={['0px', '0px', '20px']}
                            w='100%'
                            maxW='pageContainer'
                            spacing={spacing}
                            flex='0'
                        >
                            {children}
                        </Stack>
                    </Mode>
                </PropagatedThemeProvider>
            </Col>
        )
    },
)

export const FloatingElement: FC<{ floatingElement } & StackProps> = forwardRef(
    ({ children, floatingElement, ...rest }, ref) => {
        return (
            <Col position='relative' {...rest} ref={ref as any}>
                <Col
                    position='absolute'
                    width='100%'
                    top='0'
                    left='0'
                    right='0'
                    bottom='0'
                    align='center'
                    justify='center'
                >
                    {floatingElement}
                </Col>
                {children}
            </Col>
        )
    },
)

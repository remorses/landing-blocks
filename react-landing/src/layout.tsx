import {
    Box,
    DarkMode,
    Flex,
    FlexProps,
    Stack,
    StackProps,
    ThemeProvider,
    useTheme,
} from '@chakra-ui/core'
import merge from 'lodash.merge'
import React, { FC, forwardRef, Fragment, useMemo } from 'react'

export const Col: FC<FlexProps> = forwardRef((props, ref) => {
    return <Flex ref={ref} flexDir='column' {...props} />
})

export const Row: FC<FlexProps> = forwardRef((props, ref) => {
    return <Flex ref={ref} flexDir='row' {...props} />
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
    const existingTheme = useTheme()
    const merged = useMemo(() => {
        return merge(existingTheme, theme)
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
        const theme = {
            colors: {
                primary,
            },
            sizes: {
                pageContainer: pageWidth,
            },
        }
        return (
            <Col
                position='relative'
                ref={ref}
                width='100%'
                px='10px'
                align='center'
                {...styles}
                {...props}
            >
                <Mode>
                    <PropagatedThemeProvider theme={theme}>
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
                            px={['0px', '0px', '20px']}
                            w='100%'
                            maxW='pageContainer'
                            spacing={spacing}
                            flex='0'
                        >
                            {children}
                        </Stack>
                    </PropagatedThemeProvider>
                </Mode>
            </Col>
        )
    },
)

export const FloatingElement: FC<{ floatingElement } & FlexProps> = forwardRef(
    ({ children, floatingElement, ...rest }, ref) => {
        return (
            <Col position='relative' {...rest} ref={ref}>
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

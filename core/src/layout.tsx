import { Flex, FlexProps, Box, DarkMode, Stack } from '@chakra-ui/core'

import React, { FC, forwardRef, Fragment } from 'react'

export const Col: FC<FlexProps> = forwardRef((props, ref) => {
    return <Flex ref={ref} flexDir='column' {...props} />
})

export const Row: FC<FlexProps> = forwardRef((props, ref) => {
    return <Flex ref={ref} flexDir='row' {...props} />
})

export const Spacer = ({ x = '0px', y = '0px' }) => {
    return <Box mt={y} ml={x} />
}

const Dark = ({ children }) => {
    return (
        <DarkMode>
            <Box>{children}</Box>
        </DarkMode>
    )
}

const darkStyles = {
    // bg: 'gray.800',
    color: 'whiteAlpha.900',
    borderColor: 'whiteAlpha.300',
    placeholder: 'whiteAlpha.400',
}

export const PageContainer: FC<{
    floatingElement?: any
    dark?: boolean
    spacing?: string
} & FlexProps> = forwardRef(
    (
        {
            children,
            spacing = '0px',
            floatingElement = null,
            dark = false,
            ...props
        },
        ref,
    ) => {
        const Mode = dark ? DarkMode : Fragment
        const styles = dark ? darkStyles : {}
        return (
            <Col
                position='relative'
                ref={ref}
                width='100%'
                align='center'
                {...styles}
                {...props}
            >
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
                        px='20px'
                        w='100%'
                        maxW='pageContainer'
                        spacing={spacing}
                    >
                        {children}
                    </Stack>
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

export { Divider } from '@chakra-ui/core'

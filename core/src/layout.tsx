import { Flex, FlexProps, Box, DarkMode } from '@chakra-ui/core'

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
            <Box
                bg='gray.800'
                color='whiteAlpha.900'
                borderColor='whiteAlpha.300'
                placeholder='whiteAlpha.400'
            >
                {children}
            </Box>
        </DarkMode>
    )
}

export const PageContainer: FC<{
    floatingElement?: any
    dark?: boolean
} & FlexProps> = forwardRef(
    ({ children, floatingElement = null, dark = false, ...props }, ref) => {
        const Mode = dark ? Dark : Fragment
        console.log({ Mode })
        return (
            <Mode>
                <Col
                    position='relative'
                    ref={ref}
                    width='100%'
                    align='center'
                    {...props}
                >
                    <Col
                        position='absolute'
                        width='100%'
                        top='0'
                        left='0'
                        right='0'
                        bottom='0'
                        align='center'
                        justify='center'
                        overflow='hidden'
                    >
                        {floatingElement}
                    </Col>
                    <Col px='20px' w='100%' maxW='pageContainer'>
                        {children}
                    </Col>
                </Col>
            </Mode>
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

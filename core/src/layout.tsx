import { Flex, FlexProps, Box } from '@chakra-ui/core'

import React, { FC, forwardRef } from 'react'

export const Col: FC<FlexProps> = forwardRef((props, ref) => {
    return <Flex ref={ref} flexDir='column' {...props} />
})

export const Row: FC<FlexProps> = forwardRef((props, ref) => {
    return <Flex ref={ref} flexDir='row' {...props} />
})

export const Spacer = ({ x = '0px', y = '0px' }) => {
    return <Box mt={y} ml={x} />
}

export const PageContainer: FC<{
    floatingElement?: any
} & FlexProps> = forwardRef(
    ({ children, floatingElement = null, ...props }, ref) => {
        return (
            <Col position='relative' ref={ref} width='100%' align='center' {...props}>
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

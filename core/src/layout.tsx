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

export const PageContainer: FC<FlexProps> = forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <Col ref={ref} width='100%' align='center' {...props}>
                <Col px='20px' w='100%' maxW='pageContainer'>
                    {children}
                </Col>
            </Col>
        )
    },
)

export { Divider } from '@chakra-ui/core'

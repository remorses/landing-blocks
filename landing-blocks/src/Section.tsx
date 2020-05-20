import { useColorMode, Box, Stack, StackProps, BoxProps } from '@chakra-ui/core'
import React, { ReactNode, Children } from 'react'
import Color from 'color-js'
import { Text } from '@chakra-ui/core'
import { PageContainer, PageContainerProps } from './layout'
import { getPageContainerProps } from './support'

export type SectionProps = { degree?: number } & StackProps

export const Section = ({ children, degree=2, ...props }: SectionProps) => {
    const [spacing, rest] = getPageContainerProps(props)
    // const { bg } = rest
    const baseProps: BoxProps = {
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        transform: `skewY(${degree}deg)`,
        transformOrigin: 'center',
        ...rest
    }
    return (
        <Stack  position='relative' as='section' {...spacing} >
            <Box {...baseProps} />
            <Box
                {...baseProps}
                transform={`skewY(${degree + 2}deg)`}
                transformOrigin='60%'
                opacity={0.2}
            />
            <Box
                {...baseProps}
                transform={`skewY(${degree + 3}deg)`}
                transformOrigin='70%'
                opacity={0.1}
            />
            {children}
        </Stack>
    )
}

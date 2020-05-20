import { useColorMode, Box, Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import Color from 'color-js'
import { Text } from '@chakra-ui/core'
import { PageContainer, PageContainerProps } from './layout'

export type DividerProps = {
    heading?: ReactNode
    animate?: any
} & PageContainerProps

export const Divider = ({ heading = '', ...rest }: DividerProps) => {
    return (
        <PageContainer {...rest}>
            {heading ? (
                <Stack
                    justify='center'
                    align='center'
                    spacing='20px'
                    direction='row'
                    opacity={.6}
                >
                    <Line />
                    <Box
                        fontWeight='medium'
                        fontSize='text'
                        letterSpacing='0.1em'
                        textAlign='center'
                    >
                        {heading}
                    </Box>
                    <Line />
                </Stack>
            ) : (
                <Line />
            )}
        </PageContainer>
    )
}

function Line(porps) {
    const { colorMode } = useColorMode()
    return (
        <Box
            bg={
                {
                    light: Color('black').setAlpha(0.3).toCSS(),
                    dark: Color('white').setAlpha(0.3).toCSS(),
                }[colorMode]
            }
            w='100%'
            flex='1'
            minH='1px'
            maxH='1px'
            {...porps}
        />
    )
}

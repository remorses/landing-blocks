import { useColorMode } from '@chakra-ui/react'
import Color from 'color-js'
import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { PageContainer, PageContainerProps } from './layout'
import { useFaded } from './hooks'

export type DividerProps = {
    heading?: ReactNode
    animate?: any
} & PageContainerProps

export const Divider = ({ heading = '', animate, ...rest }: DividerProps) => {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer as={Faded} {...rest}>
            {heading ? (
                <Stack
                    justify='center'
                    align='center'
                    spacing='20px'
                    direction='row'
                    opacity={0.6}
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

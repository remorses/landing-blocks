import { useColorMode, Box, Stack } from '@chakra-ui/core'
import React from 'react'
import Color from 'color-js'
import { Text } from '@chakra-ui/core'
import { PageContainer } from './layout'

function Line(porps) {
    const { colorMode } = useColorMode()
    return (
        <Box
            bg={
                {
                    light: Color('black')
                        .setAlpha(0.3)
                        .toCSS(),
                    dark: Color('white')
                        .setAlpha(0.3)
                        .toCSS(),
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

export const Divider = ({ heading = '', ...rest }) => {
    return (
        <PageContainer {...rest}>
            {heading ? (
                <Stack
                    justify='center'
                    align='center'
                    spacing='20px'
                    direction='row'
                >
                    <Line />
                    <Text
                        fontWeight='medium'
                        fontSize='14px'
                        letterSpacing='3px'
                    >
                        {heading}
                    </Text>
                    <Line />
                </Stack>
            ) : (
                <Line />
            )}
        </PageContainer>
    )
}

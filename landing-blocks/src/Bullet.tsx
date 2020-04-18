import { useColorMode, BoxProps, Box } from '@chakra-ui/core'
import React, { Fragment } from 'react'
import Color from 'color-js'
import { Text } from '@chakra-ui/core'

export type BulletProps = BoxProps

export const Bullet = (props) => {
    const { colorMode } = useColorMode()
    if (!props.children) {
        return <Fragment />
    }
    return (
        <Box
            w='fit-content'
            py='2px'
            px='6px'
            bg={
                {
                    light: Color('black').setAlpha(0.2).toCSS(),
                    dark: Color('white').setAlpha(0.2).toCSS(),
                }[colorMode]
            }
            fontWeight='medium'
            fontSize='subtext'
            borderRadius='4px'
            {...props}
        />
    )
}

import React, { FC } from 'react'
import { Box, useColorMode, BoxProps } from '@chakra-ui/core'
import { WireLong } from '../svgs/'
import { useColor } from '../support'
import Color from 'color-js'

function lighter(c) {
    // const { colorMode } = useColorMode()
    // const isDark = colorMode === 'dark'
    c = useColor(c)
    const newColor = Color(c).setAlpha(0.06)
    return newColor.toCSS()
}

export const CurlyWire: FC<{
    primary?: string
    secondary?: string
} & BoxProps> = ({
    primary = 'primary', // #e9fcff
    secondary = 'secondary', // #fdf2ed
    ...rest
}) => {
    primary = lighter(primary)
    secondary = lighter(secondary)
    return <Box stroke='#000' as={WireLong} w='100%' {...rest} />
}

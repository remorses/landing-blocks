import { Box, BoxProps } from '@chakra-ui/react'
import Color from 'color-js'
import React, { FC } from 'react'
import { useColor } from '../support'

function lighter(c) {
    // const { colorMode } = useColorMode()
    // const isDark = colorMode === 'dark'
    c = useColor(c)
    const newColor = Color(c).setAlpha(0.06)
    return newColor.toCSS()
}

function getCliPath({ distortion }) {
    const isNegative = distortion < 0
    distortion = Math.abs(distortion)
    let a = distortion * 100
    let b = 100 - distortion * 100
    if (isNegative) {
        return `polygon(0 ${a}%, 100% 0, 100% ${b}%, 0 100%)`
    }

    return `polygon(0% 0, 100% ${a}%, 100% 100%, 0 ${b}%)`
}

export const GradientRect: FC<{
    primary?: string
    secondary?: string
    distortion?: number
} & BoxProps> = ({
    primary = 'primary', // #e9fcff
    secondary = 'secondary', // #fdf2ed
    distortion = 0.3,
    ...rest
}) => {
    primary = lighter(primary)
    secondary = lighter(secondary)
    const clipPath = getCliPath({ distortion })
    return (
        <Box
            w='80%'
            height='70%'
            background={`linear-gradient(45deg, ${primary} 30%, ${secondary} 60%)`}
            style={{
                clipPath,
            }}
            {...rest}
        />
    )
}

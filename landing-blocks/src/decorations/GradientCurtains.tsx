import { Box, BoxProps } from '@chakra-ui/react'
import Color from 'color-js'
import React, { FC } from 'react'
import { useColor } from '../support'

function lighter(c, amount = 0.04) {
    // const { colorMode } = useColorMode()
    // const isDark = colorMode === 'dark'
    c = useColor(c)
    const newColor = Color(c).setAlpha(amount)
    return newColor.toCSS()
}

export const GradientCurtains: FC<{
    primary?: string
    secondary?: string
} & BoxProps> = ({
    primary = 'primary', // #e9fcff
    secondary = 'secondary', // #fdf2ed
    ...rest
}) => {
    const linesColor = `linear-gradient(217deg,${lighter(
        primary,
    )} 30%,${lighter(primary, 1)})`
    primary = lighter(primary)
    secondary = lighter(secondary)
    return (
        <Box
            w='100%'
            minHeight='120%'
            backgroundImage={`radial-gradient(circle at 70% 70%,${primary},${secondary})`}
            transform='skewY(-14.5deg)'
            position='relative'
            {...rest}
        >
            <Box
                backgroundImage={linesColor}
                transform='rotate(-1deg)'
                height='1px'
                position='absolute'
                w='100%'
                opacity={0.1}
                bottom='-12px'
            />
            <Box
                backgroundImage={linesColor}
                transform='rotate(-3.5deg)'
                height='1px'
                position='absolute'
                w='100%'
                opacity={0.4}
                bottom='-42px'
            />
        </Box>
    )
}

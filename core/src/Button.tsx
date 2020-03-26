import React, { FC } from 'react'
import { Button as B, HeadingProps, ButtonProps } from '@chakra-ui/core'
import { Children } from 'react'
import get from 'lodash.get'
import Color from 'color-js'
import { useTheme } from 'emotion-theming'

export const Button: FC<ButtonProps> = ({ bg = 'primary', ...props }) => {
    const theme = useTheme() as any
    const realBg = get(theme.colors, bg)
    const lightness = Color(realBg as any).getLightness()
    console.log({ lightness })
    const isDark = lightness < 0.7
    const color = isDark ? 'white' : 'black'
    // console.log('bg', bg)
    // console.log('color', color)
    return (
        <B
            px='40px'
            d='block'
            width='auto'
            color={color}
            bg={bg}
            fontSize='18px'
            fontWeight='medium'
            _hover={{ bg: color, color: bg as string }}
            {...props}
        />
    )
}

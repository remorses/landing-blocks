import React, { FC } from 'react'
import { Button as B, HeadingProps, ButtonProps } from '@chakra-ui/core'
import { Children } from 'react'
import get from 'lodash.get'
import Color from 'color-js'
import { useTheme } from 'emotion-theming'

export const Button: FC<ButtonProps> = (props) => {
    let { bg = 'gray' } = props
    const theme = useTheme() as any
    const realBg = get(theme.colors, bg)
    const isDark = Color(realBg as any).getLightness() < 0.5
    const color = isDark ? 'white' : 'black'
    // console.log('bg', bg)
    // console.log('color', color)
    return (
        <B
            color={color}
            px='20px'
            _hover={{ bg: color, color: bg as string }}
            {...props}
        />
    )
}

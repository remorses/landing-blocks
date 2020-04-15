import { Button as B, ButtonProps } from '@chakra-ui/core'
import Color from 'color-js'
import React, { forwardRef, Fragment } from 'react'
import { useColor } from './support'

export const Button = forwardRef(
    ({ bg = 'primary', ...props }: ButtonProps & { href?: string }, ref) => {
        const realBg = useColor(bg)
        const lightness = Color(realBg as any).getLightness()
        // console.log({ lightness })
        const isDark = lightness < 0.7
        const color = isDark ? 'white' : 'black'
        // console.log('bg', bg)
        // console.log('color', color)
        if (!props.children) {
            return <Fragment />
        }
        return (
            <B
                ref={ref}
                as={props.href ? 'a' : 'button'}
                px='20px'
                d='block'
                width='auto'
                color={color}
                bg={bg}
                fontSize='text'
                fontWeight='medium'
                _hover={{ bg: color, color: bg as string }}
                {...props}
            />
        )
    },
)

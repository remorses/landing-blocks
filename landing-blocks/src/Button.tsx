/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Button as B, ButtonProps as ButtonProps_ } from '@chakra-ui/core'
import Color from 'color-js'
import React, { forwardRef, Fragment, useMemo, FC } from 'react'
import { useColor } from './support'
import wobble from './animations/wobble'
import shake from './animations/shake'
import bounceIn from './animations/bouncein'
import headShake from './animations/headshake'

export type ButtonProps = ButtonProps_ & {
    href?: string
    animate?: boolean | keyof typeof animations
}

const animations = {
    wobble,
    bounceIn,
    headShake,
    shake,
}

export const Button: FC<ButtonProps> = forwardRef(
    ({ bg = 'primary', animate, ...props }: ButtonProps, ref) => {
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
        const animationCss = useMemo(() => {
            if (animate === true) {
                return makeAnimationCss(headShake)
            }
            if (animate in animations) {
                return makeAnimationCss(animations[animate as string])
            }
            return css``
        }, [animate])
        return (
            <B
                css={animationCss}
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

function makeAnimationCss(keyframes) {
    return css`
        animation-duration: 4s;
        animation-delay: 3s;
        animation-timing-function: ease-in-out;
        animation-name: ${keyframes};
        animation-direction: normal;
        animation-iteration-count: infinite;
    `
}

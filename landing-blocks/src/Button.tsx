/** @jsx jsx */
import { Button as B, ButtonProps as ButtonProps_ } from '@chakra-ui/core'
import { css, jsx } from '@emotion/core'
import Color from 'color-js'
import { FC, forwardRef, Fragment, useMemo } from 'react'
import bounceIn from './animations/bouncein'
import headShake from './animations/headshake'
import shake from './animations/shake'
import wobble from './animations/wobble'
import { useColor } from './support'

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
                return makeAnimationCss(bounceIn)
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
                transition='all 0.1s ease-in-out'
                px='20px'
                d='block'
                width='auto'
                color={color}
                bg={bg}
                fontSize='text'
                fontWeight='medium'
                _hover={{ shadow: 'xl', transform: 'scale(1.1)' }}
                {...props}
            />
        )
    },
)

function makeAnimationCss(keyframes) {
    return css`
        animation-duration: 0.6s;
        /* animation-delay: 1s; */
        animation-timing-function: ease-in-out;
        animation-name: ${keyframes};
        animation-direction: normal;
        /* animation-iteration-count: infinite; */
    `
}

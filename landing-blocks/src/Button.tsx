/** @jsxRuntime classic */
/** @jsx jsx */
import { Button as B, ButtonProps as ButtonProps_ } from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'
import Color from 'color-js'
import { FC, forwardRef, Fragment, useMemo } from 'react'
import bounceIn from './animations/bouncein'
import headShake from './animations/headshake'
import shake from './animations/shake'
import wobble from './animations/wobble'
import { useColor } from './support'

export type ButtonProps = ButtonProps_ & {
    href?: string
    biggerOnHover?: boolean
    animate?: boolean | keyof typeof myAnimations
}

const myAnimations: any = {
    wobble,
    bounceIn,
    headShake,
    shake,
}

export const Button: FC<ButtonProps> = forwardRef(
    (
        {
            bg = 'primary',
            className = '',
            biggerOnHover = false,
            animate,
            ...props
        }: ButtonProps,
        ref,
    ) => {
        const realBg = useColor(bg)
        const lightness = Color(realBg as any).getLightness()

        const isDark = lightness < 0.7
        const color = isDark ? 'white' : 'black'
        if (!props.children) {
            return <Fragment />
        }
        const animationCss = useMemo(() => {
            if (animate === true) {
                return makeAnimationCss(bounceIn)
            }
            if (animate && animate in myAnimations) {
                return makeAnimationCss(myAnimations[animate as string])
            }
            return css``
        }, [animate])

        const style = useMemo(() => {
            return makeStyle(realBg)
        }, [realBg])

        return (
            <B
                css={[biggerOnHover ? style : {}, animationCss]}
                ref={ref as any}
                as={props.href ? 'a' : 'button'}
                // transition='all 0.1s ease-in-out'
                px='20px'
                className={className}
                d='block'
                width='auto'
                color={color}
                bg={bg}
                fontSize='text'
                fontWeight='medium'
                // _hover={{ shadow: 'xl', transform: 'scale(1.1)' }}
                {...props}
            />
        )
    },
)

const makeStyle = (bg) => {
    const highlight = Color(bg).setAlpha(0.2).toHSL().toString()
    return css`
        & {
            box-shadow: 0 0 0 0 ${highlight};
            animation: landingBlocksPulseAnimation 1.75s infinite
                cubic-bezier(0.66, 0, 0, 1);
        }

        @keyframes landingBlocksPulseAnimation {
            to {
                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
            }
        }

        & {
            transition: transform 0.15s;
            cursor: pointer;
            position: relative;
            z-index: 1;
        }

        &::after {
            content: '';
            background-color: ${bg};
            transition: transform 0.15s;
            border-radius: 7px;
            position: absolute;
            inset: 0;
            z-index: -1;
        }

        &:hover::after {
            transform: scale(1.06);
        }
    `
}

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

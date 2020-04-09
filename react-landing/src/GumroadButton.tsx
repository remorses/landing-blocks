import React, { FC, Fragment, forwardRef } from 'react'
import {
    Button as B,
    HeadingProps,
    ButtonProps,
    Box,
    useColorMode,
    Link,
} from '@chakra-ui/core'
import { Children } from 'react'
import get from 'lodash.get'
import Color from 'color-js'
import { useTheme } from 'emotion-theming'
import { useColor } from './support'
import useScript from 'react-script-hook'

export type GumroadButtonProps = {
    singlePurchase?: boolean
    productId: string
}

export const GumroadButton = forwardRef(
    (
        { singlePurchase = false, productId='demo', ...props }: GumroadButtonProps,
        ref,
    ) => {
        const [loading, error] = useScript({
            src: 'https://gumroad.com/js/gumroad.js',
        })
        const { colorMode } = useColorMode()
        if (loading) {
            return (
                <Box
                    borderRadius='6px'
                    width='230px'
                    h='50px'
                    bg={
                        { light: 'gray.100', dark: 'rgba(255,255,255,.1)' }[
                            colorMode
                        ]
                    }
                />
            )
        }

        return (
            <a
                ref={ref as any}
                className='gumroad-button'
                href={`https://gum.co/${productId}?wanted=true`}
                target='_blank'
                data-gumroad-single-product={singlePurchase ? 'true' : 'false'}
                {...props}
            >
                Buy Now My Product
            </a>
        )
        // return <B {...props} />
    },
)

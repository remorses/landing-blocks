import { Link, useColorMode } from '@chakra-ui/core'
import React, { forwardRef } from 'react'
import useScript from 'react-script-hook'

export type GumroadButtonProps = {
    singlePurchase?: boolean
    productId: string
}

const Placeholder = (props) => {
    const { colorMode } = useColorMode()
    return (
        <Link
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            borderRadius='6px'
            color='gray.300'
            width='230px'
            h='50px'
            bg={{ light: 'gray.100', dark: 'rgba(255,255,255,.1)' }[colorMode]}
            {...props}
        />
    )
}

export const GumroadButton = forwardRef(
    (
        {
            singlePurchase = false,
            productId = 'demo',
            ...props
        }: GumroadButtonProps,
        ref,
    ) => {
        const [loading, error] = useScript({
            src: 'https://gumroad.com/js/gumroad.js',
        })
        if (loading || error) {
            return <Placeholder children={error} />
        }

        return (
            <Placeholder
                ref={ref as any}
                className='gumroad-button'
                href={`https://gum.co/${productId}?wanted=true`}
                target='_blank'
                data-gumroad-single-product={singlePurchase ? 'true' : 'false'}
                {...props}
            >
                Buy Now My Product
            </Placeholder>
        )
        // return <B {...props} />
    },
)

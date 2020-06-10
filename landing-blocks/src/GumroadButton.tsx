import { Link, useColorMode } from '@chakra-ui/core'
import React, { FC, forwardRef, ReactNode } from 'react'
import useScript from 'react-script-hook'

export type GumroadButtonProps = {
    singlePurchase?: boolean
    productId?: string
    children?: ReactNode
}

export const GumroadButton: FC<GumroadButtonProps> = forwardRef(
    (
        {
            singlePurchase = false,
            productId = 'demo',
            children,
            ...props
        }: GumroadButtonProps,
        ref,
    ) => {
        const [loading, error] = useScript({
            src: 'https://gumroad.com/js/gumroad.js',
            // checkForExisting: true
        })
        if (loading || error) {
            return <Placeholder children={error?.message} />
        }

        return (
            <Placeholder
                ref={ref as any}
                
                href={`https://gum.co/${productId}?wanted=true`}
                target='_blank'
                data-gumroad-single-product={singlePurchase ? 'true' : 'false'}
                lineHeight='1em'
                {...props}
                className='gumroad-button'
            >
                {children || 'Buy Now My Product'}
            </Placeholder>
        )
        // return <B {...props} />
    },
)

const Placeholder = (props) => {
    const { colorMode } = useColorMode()
    return (
        <Link
            display='flex'
            direction='column'
            alignItems='center'
            justifyContent='center'
            borderRadius='6px'
            fontWeight='semibold'
            color='gray.500'
            minWidth='230px'
            h='50px'
            bg={{ light: 'gray.100', dark: 'rgba(255,255,255,.1)' }[colorMode]}
            {...props}
        />
    )
}

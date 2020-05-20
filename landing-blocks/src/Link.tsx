import {
    useColorMode,
    BoxProps,
    Box,
    Link as Link_,
    LinkProps as LinkProps_,
} from '@chakra-ui/core'
import React, { Fragment, Children } from 'react'
import Color from 'color-js'
import { Text } from '@chakra-ui/core'

export type LinkProps = LinkProps_

export const Link = ({ children, ...props }: LinkProps) => {
    const { colorMode } = useColorMode()
    return (
        <Link_
            w='fit-content'
            position='relative'
            lineHeight='1.4em'
            textDecoration='none'
            color='primary'
            fontWeight='medium'
            fontSize='text'
            borderBottom='2px solid'
            borderColor='transparent'
            py='0.2em'
            isTruncated
            transition='all 0.3s ease-in-out 0s'
            _hover={{
                borderColor: 'currentColor',
            }}
            {...props}
        >
            {children}
        </Link_>
    )
}

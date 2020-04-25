import { Heading as H, HeadingProps } from '@chakra-ui/core'
import React, { Fragment } from 'react'


export function Heading(props: HeadingProps) {
    if (!props.children) {
        return <Fragment />
    }
    const as = typeof props.children === 'string' ? 'h2' : 'span'
    return <H minW='100px' as={as} m={0} fontSize='heading' fontWeight='medium' {...props} />
}

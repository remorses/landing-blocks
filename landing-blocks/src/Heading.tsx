import { Heading as H, HeadingProps } from '@chakra-ui/react'
import React, { Fragment } from 'react'


export function Heading(props: HeadingProps) {
    if (!props.children) {
        return <Fragment />
    }
    const as = typeof props.children === 'string' ? 'h2' : 'span'
    return <H minW='100px' as={as} fontSize='heading' fontWeight='medium' {...props} />
}

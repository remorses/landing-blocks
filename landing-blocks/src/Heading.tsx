import { Heading as H, HeadingProps } from '@chakra-ui/core'
import React, { Fragment } from 'react'


export function Heading(props: HeadingProps) {
    if (!props.children) {
        return <Fragment />
    }
    return <H minW='100px' as='h1' m={0} fontSize='heading' fontWeight='medium' {...props} />
}

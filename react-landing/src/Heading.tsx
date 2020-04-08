import React, { FC, Fragment } from 'react'
import { Heading as H, HeadingProps, } from '@chakra-ui/core'
import { Children } from 'react'

export function Heading(props) {
    if (!props.children) {
        return <Fragment />
    }
    return <H minW='100px' as='h1' m={0} fontSize='24px' fontWeight='medium' {...props} />
}

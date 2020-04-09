import { Heading as H } from '@chakra-ui/core'
import React, { Fragment } from 'react'

export function Heading(props) {
    if (!props.children) {
        return <Fragment />
    }
    return <H minW='100px' as='h1' m={0} fontSize='24px' fontWeight='medium' {...props} />
}

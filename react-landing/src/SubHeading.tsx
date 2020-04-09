import React, { FC, Props, Fragment } from 'react'
import { Heading as H, HeadingProps } from '@chakra-ui/core'
import { Children } from 'react'

export function Subheading(props: HeadingProps) {
    if (!props.children) {
        return <Fragment />
    }
    return (
        <H
            as='div'
            m={0}
            opacity={0.6}
            fontWeight='normal'
            fontSize='18px'
            {...props}
        />
    )
}

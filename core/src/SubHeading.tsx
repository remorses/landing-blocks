import React, { FC, Props } from 'react'
import { Heading as H, HeadingProps } from '@chakra-ui/core'
import { Children } from 'react'


export function SubHeading(props: HeadingProps) {
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

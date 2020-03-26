import React, { FC } from 'react'
import { Heading as H, HeadingProps } from '@chakra-ui/core'
import { Children } from 'react'

export const Heading: FC<HeadingProps> = (props) => {
    return <H as='div' m={0} fontWeight='medium' {...props} />
}

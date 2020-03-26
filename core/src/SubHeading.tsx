import React, { FC } from 'react'
import { Heading as H, HeadingProps } from '@chakra-ui/core'
import { Children } from 'react'

export const SubHeading: FC<HeadingProps> = (props) => {
    return (
        <H as='div' m={0} opacity={0.6} fontWeight='normal' fontSize='24px' {...props} />
    )
}

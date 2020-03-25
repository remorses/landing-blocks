import { Flex, FlexProps, Box } from '@chakra-ui/core'

import React, { FC } from 'react'

export const Col: FC<FlexProps> = (props) => {
    return <Flex flexDir='column' {...props} />
}

export const Row: FC<FlexProps> = (props) => {
    return <Flex flexDir='row' {...props} />
}

export const Spacer = ({ x = '0px', y = '0px' }) => {
    return <Box mt={y} ml={x} />
}

export {Divider} from '@chakra-ui/core'
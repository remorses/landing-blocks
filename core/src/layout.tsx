import { Flex, FlexProps, Box } from '@chakra-ui/core'

import React, { FC } from 'react'

export const Col: FC<FlexProps> = (props) => {
    return <Flex flexDir='column' {...props} />
}

export const Row: FC<FlexProps> = (props) => {
    return <Flex flexDir='row' {...props} />
}

export const Spacer = ({ x = 0, y = 0 }) => {
    return <Box mt={y + 'px'} ml={y + 'px'} />
}

export {Divider} from '@chakra-ui/core'
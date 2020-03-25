import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer } from '.'
import { Text } from '@chakra-ui/core'

export const Feature = ({
    heading,
    subhead,
    image,
    flip = false,
    backgroundColor = 'transparent',
}) => {
    const dir = flip ? 'row-reverse' : 'row'
    return (
        <Row flexDir={dir} py='120px' bg={backgroundColor}>
            <Stack spacing={8} flex='1'>
                <Heading lineHeight='50px' fontWeight='medium' fontSize='36px'>
                    {heading}
                </Heading>
                <Text lineHeight='34px' m={0} opacity={0.6} fontWeight='normal' fontSize='18px'>
                    {subhead}
                </Text>
            </Stack>
            <Box flex='0.1' />
            <Col flex='1'>{image}</Col>
        </Row>
    )
}

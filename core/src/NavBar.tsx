import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer } from '.'
import { Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'

export const NavBar = ({ logo, navs }) => {
    return (
        <Row py='40px'>
            <Box alignSelf='flexStart'>{logo}</Box>
            <Box flex='1' />
            <Stack isInline spacing='20px'>
                {navs.map((x) => (
                    <Box fontSize='16px' fontWeight='medium'>
                        {x}
                    </Box>
                ))}
            </Stack>
        </Row>
    )
}

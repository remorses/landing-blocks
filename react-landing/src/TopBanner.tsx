import { Box, Stack, Text, Button } from '@chakra-ui/core'
import React from 'react'
import { Row } from './layout'
import { PageContainer } from './layout'
import { Bullet } from './Bullet'

export function TopBanner({ heading, cta, bullet, ...rest }) {
    return (
        <PageContainer py='10px' {...rest}>
            <Stack
                alignSelf='center'
                spacing='10px'
                direction='row'
                align='center'
                justify='center'
            >
                <Bullet>{bullet}</Bullet>
                <Text>{heading}</Text>
                <Box>{cta}</Box>
            </Stack>
        </PageContainer>
    )
}

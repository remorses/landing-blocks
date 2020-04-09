import { Box, Stack, Text } from '@chakra-ui/core'
import React from 'react'
import { Bullet } from './Bullet'
import { PageContainer } from './layout'

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

import { Box, Stack, Text, Button } from '@chakra-ui/core'
import React from 'react'
import { Row, Bullet } from '.'
import { PageContainer } from './layout'

export function TopBanner({ heading, cta, bullet, ...rest }) {
    return (
        <PageContainer py='16px' {...rest}>
            <Stack
                alignSelf='center'
                spacing='10px'
                direction='row'
                align='center'
                justify='center'
            >
                <Bullet>{bullet}</Bullet>
                <Text>{heading}</Text>
                <Button variant='link'>{cta}</Button>
            </Stack>
        </PageContainer>
    )
}

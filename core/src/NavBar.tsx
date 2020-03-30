import { Box, Stack } from '@chakra-ui/core'
import React from 'react'
import { Row } from '.'
import { PageContainer } from './layout'

export function NavBar({ logo, navs, ...rest }) {
    return (
        <PageContainer py='40px' {...rest}>
            <Row>
                <Box
                    display={{ sm: 'none', lg: 'block' }}
                    alignSelf='flexStart'
                >
                    {logo}
                </Box>
                <Box flex='1' />
                <Stack isInline spacing='20px' align='center'>
                    {navs.map((x, i) => (
                        <Box key={i} fontSize='16px' fontWeight='medium'>
                            {x}
                        </Box>
                    ))}
                </Stack>
            </Row>
        </PageContainer>
    )
}

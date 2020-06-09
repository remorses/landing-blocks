import { Box, Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { PageContainer, PageContainerProps } from './layout'

export type FooterProps = {
    columns: { [k: string]: ReactNode[] }
    businessName?: string
} & PageContainerProps

export function Footer({
    columns = {},
    businessName = 'Monster Inc.',
    ...rest
}: FooterProps) {
    return (
        <PageContainer py='60px' minHeight='200px' {...rest}>
            <Stack
                flexDir='row'
                flexWrap='wrap'
                justifyContent='space-evenly'
                spacing='60px'
            >
                {Object.keys(columns).map((k, i) => {
                    return (
                        <Stack
                            minW={['100%', '100%', '0']}
                            spacing='20px'
                            key={i}
                        >
                            <Box
                                d='block'
                                fontSize='text'
                                fontWeight='medium'
                                width='auto'
                                textAlign='left'
                            >
                                {k}
                            </Box>
                            {columns[k].map((x, i) => (
                                <Box opacity={.6} key={i}>{x}</Box>
                            ))}
                        </Stack>
                    )
                })}
            </Stack>
            <Box mt='60px' ml='60px' />
            <Box width='auto' opacity={0.7} fontSize='subtext' alignSelf='center'>
                Copyright © {new Date().getFullYear()} {businessName}
            </Box>
        </PageContainer>
    )
}

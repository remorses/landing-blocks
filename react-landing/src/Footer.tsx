import { Box, Stack, Text } from '@chakra-ui/core'
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
                            spacing='10px'
                            key={i}
                        >
                            <Text
                                d='block'
                                fontSize='16px'
                                fontWeight='medium'
                                width='auto'
                                textAlign='left'
                            >
                                {k}
                            </Text>
                            {columns[k].map((x, i) => (
                                <Text key={i}>{x}</Text>
                            ))}
                        </Stack>
                    )
                })}
            </Stack>
            <Box mt='60px' ml='60px' />
            <Text width='auto' opacity={0.6} fontSize='14px' alignSelf='center'>
                Copyright © {new Date().getFullYear()} {businessName}
            </Text>
        </PageContainer>
    )
}

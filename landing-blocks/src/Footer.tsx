import { Box, Stack } from '@chakra-ui/react'
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
        <PageContainer
            fontWeight='medium'
            py='60px'
            minHeight='200px'
            spacing='60px'
            {...rest}
        >
            <Stack
                direction={['column', null, 'row']}
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
                                fontWeight='medium'
                                width='auto'
                                textAlign='left'
                            >
                                {k}
                            </Box>
                            {columns[k].map((x, i) => (
                                <Box opacity={0.6} key={i}>
                                    {x}
                                </Box>
                            ))}
                        </Stack>
                    )
                })}
            </Stack>
            <Box
                width='auto'
                opacity={0.6}
                fontSize='12px'
                alignSelf='center'
            >
                Copyright © {new Date().getFullYear()} {businessName}
            </Box>
        </PageContainer>
    )
}

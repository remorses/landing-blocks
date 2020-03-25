import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack } from '@chakra-ui/core'
import { Row } from '.'
import { PageContainer } from './layout'

export const Footer = ({
    columns = {} as { [k: string]: ReactNode[] },
    businessName = 'Monster Inc.',
}) => {
    return (
        <PageContainer minHeight='200px'>
            <Stack isInline flexWrap='wrap' justifyContent='space-evenly'>
                {Object.keys(columns).map((k) => {
                    return (
                        <Stack spacing='10px' key={k}>
                            <Text
                                d='block'
                                fontSize='16px'
                                fontWeight='medium'
                                width='auto'
                                textAlign='left'
                            >
                                {k}
                            </Text>
                            {columns[k].map((x) => (
                                <Text>{x}</Text>
                            ))}
                        </Stack>
                    )
                })}
            </Stack>
            <Box mt='40px' />
            <Text width='auto' opacity={0.6} fontSize='14px' alignSelf='center'>
                Copyright © 2019 {businessName}
            </Text>
        </PageContainer>
    )
}

import React from 'react'

import { PageContainer, Row } from './layout'
import { Stack, Input, Box } from '@chakra-ui/core'
import { Button } from './Button'

export function EmailForm({
    cta = 'Notify me',
    placeholder = 'Enter your email',
    animate = true,
    fingerprint = '',
    ...rest
}) {
    return (
        <Stack
            justify='flex-start'
            width='auto'
            spacing='20px'
            isInline
            direction='row'
            align='center'
            {...rest}
        >
            <Input
                focusBorderColor='primary'
                shadow='md'
                minW='250px'
                flex='1'
                placeholder={placeholder}
            />
            <Box>
                <Button
                    shadow='md'
                    fontSize='16px'
                    px='10px'
                    textAlign='center'
                >
                    {cta}
                </Button>
            </Box>
        </Stack>
    )
}

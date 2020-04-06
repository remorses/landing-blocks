import React from 'react'
import { useFadeUpAnimation } from './hooks'
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
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 4,
    })
    return (
        <Stack
            justify='flex-start'
            width='auto'
            spacing='20px'
            isInline
            direction='row'
            align='center'
            ref={ref}
            {...rest}
        >
            <Input shadow='md' minW='250px' flex='1' placeholder={placeholder} />
            <Box>
                <Button shadow='md' fontSize='16px' px='10px' textAlign='center'>
                    {cta}
                </Button>
            </Box>
        </Stack>
    )
}

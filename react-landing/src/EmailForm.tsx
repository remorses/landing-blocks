import React from 'react'

import { PageContainer, Row, Col } from './layout'
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
            flexDirection={['column', null, 'row']}
            // align='center'
            fontSize='16px'
            {...rest}
        >
            <Input
                focusBorderColor='primary'
                shadow='md'
                minW='250px'
                minH='40px'
                placeholder={placeholder}
            />
            <Box ml='20px' />
            <Col align='flex-start' w={['100%', null, 'auto']}>
                <Button shadow='md' m='0' px='10px' textAlign='center'>
                    {cta}
                </Button>
            </Col>
        </Stack>
    )
}

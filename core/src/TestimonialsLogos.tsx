import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack } from '@chakra-ui/core'
import { Row } from '.'
import { PageContainer, Col } from './layout'

export const TestimonialsLogos = ({ testimonials, ...rest }) => {
    return (
        <PageContainer py='20px' {...rest}>
            <Stack
                flexDir='row'
                flexWrap='wrap'
                isInline
                justify='space-evenly'
                spacing='40px'
                align='center'
            >
                {testimonials.map((x) => (
                    <Col
                        key={x}
                        minW={{ sm: '100%', lg: '160px' }}
                        // flex='1'
                        // justify='center'
                        align='center'
                        opacity={0.6}
                    >
                        <Col
                            minH='80px'
                            w='160px'
                            justify='center'
                            align='center'
                        >
                            {x}
                        </Col>
                    </Col>
                ))}
            </Stack>
        </PageContainer>
    )
}

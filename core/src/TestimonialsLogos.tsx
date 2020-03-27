import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack } from '@chakra-ui/core'
import { Row } from '.'
import { PageContainer, Col } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

export function TestimonialsLogos({ testimonials, animate = true, ...rest }) {
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: testimonials.length,
    })
    return (
        <PageContainer ref={ref} py='20px' {...rest}>
            <Stack
                flexDir='row'
                flexWrap='wrap'
                isInline
                justify='space-evenly'
                spacing='40px'
                align='center'
            >
                {testimonials.map((x, i) => (
                    <Col
                        key={i}
                        minW={{ sm: '100%', lg: '160px' }}
                        as={animated.div}
                        style={animations[i]}
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

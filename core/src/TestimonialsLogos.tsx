import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack } from '@chakra-ui/core'
import { Row, Heading, SubHeading } from '.'
import { PageContainer, Col } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

export function TestimonialsLogos({
    heading = '',
    subhead = '',
    testimonials,
    animate = true,
    ...rest
}) {
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: testimonials.length,
    })
    return (
        <PageContainer spacing='20px' ref={ref} py='20px' {...rest}>
            <Stack align='center' spacing='20px'>
                <Heading as='h2'>{heading}</Heading>
                <SubHeading>{subhead}</SubHeading>
            </Stack>
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
                    >
                        <Col
                            opacity={0.7}
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

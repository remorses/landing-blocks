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
            {(heading || subhead) && (
                <Stack align='center' spacing='20px'>
                    <Heading as='h2'>{heading}</Heading>
                    <SubHeading>{subhead}</SubHeading>
                </Stack>
            )}
            <Stack
                flexDir={['column', 'column', 'row']}
                justify='space-evenly'
                isInline // TODO Stack should get isInline from flexDir if it is an array
                spacing='40px'
                align='center'
            >
                {testimonials.map((x, i) => (
                    <Col
                        key={i}
                        minW={['100%', '100%', '160px']}
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

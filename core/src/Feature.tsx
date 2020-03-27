import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer, PageContainer } from '.'
import { Text } from '@chakra-ui/core'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

export function Feature({
    heading,
    subhead,
    image,
    flip = false,
    backgroundColor = 'transparent',
    animate = true,
    ...rest
}) {
    const dir = flip ? 'row-reverse' : 'row'
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 3,
    })
    return (
        <PageContainer ref={ref} py='120px' bg={backgroundColor} {...rest}>
            <Stack spacing='40px' flexDir={dir} flexWrap='wrap'>
                <Stack spacing={8} flex='1' minW='400px'>
                    <Heading
                        as={animated.h2}
                        style={animations[0]}
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='36px'
                    >
                        {heading}
                    </Heading>
                    <Text
                        as={animated.p}
                        style={animations[1]}
                        lineHeight='34px'
                        m={0}
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='18px'
                    >
                        {subhead}
                    </Text>
                </Stack>

                <Col
                    as={animated.div}
                    style={animations[2]}
                    align='center'
                    flex='1'
                    minW='400px'
                >
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}

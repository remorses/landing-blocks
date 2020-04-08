import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer, PageContainer } from '.'
import { Text } from '@chakra-ui/core'
import { useFadeUpAnimation, useFaded } from './hooks'
import { animated } from 'react-spring'

export function Feature({
    heading,
    subhead,
    image = null as any,
    flip = false,
    animate = true,
    direction = 'row',
    ...rest
}) {
    const dir: any = (direction) => (flip ? `${direction}-reverse` : direction)
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer py='80px' {...rest}>
            <Stack
                align='center'
                spacing='40px'
                isReversed={flip}
                flexDir={['column', null, dir(direction)]}
            >
                <Stack as={Faded} spacing='20px' flex='1' minW='400px'>
                    <Heading
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='36px'
                    >
                        {heading}
                    </Heading>
                    <Text
                        lineHeight='34px'
                        m={0}
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='18px'
                    >
                        {subhead}
                    </Text>
                </Stack>

                <Col as={Faded} align='center' flex='1' minW='400px'>
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}

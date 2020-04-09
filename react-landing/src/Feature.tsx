import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer, PageContainer } from '.'
import { Text } from '@chakra-ui/core'
import {  useFaded } from './hooks'
import { Subheading } from './Subheading'


export function Feature({
    heading,
    subheading,
    image = null as any,
    flip = false,
    animate = undefined,
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
                // isReversed={flip}
                flexDirection={['column', null, dir(direction)]}
            >
                <Stack as={Faded} spacing='20px' flex='1' minW='300px'>
                    <Heading
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='36px'
                    >
                        {heading}
                    </Heading>
                    <Subheading
                        lineHeight='34px'
                        m={0}
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='18px'
                    >
                        {subheading}
                    </Subheading>
                </Stack>

                <Col as={Faded} align='center' flex='1' minW='300px'>
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}

import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack } from '@chakra-ui/core'
import { Row, Heading, SubHeading } from '.'
import { PageContainer, Col } from './layout'
import {  useFaded } from './hooks'


export function TestimonialsLogos({
    heading = '',
    subheading = '',
    testimonials,
    animate = true,
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer spacing='20px'  py='20px' {...rest}>
            {(heading || subheading) && (
                <Stack align='center' spacing='20px'>
                    <Heading as='h2'>{heading}</Heading>
                    <SubHeading>{subheading}</SubHeading>
                </Stack>
            )}
            <Stack
                as={Faded}
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

import { Stack } from '@chakra-ui/core'
import React from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer } from './layout'
import { Subheading } from './Subheading'


export function TestimonialsLogos({
    heading = '',
    subheading = '',
    testimonials,
    animate = undefined,
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer spacing='20px'  py='20px' {...rest}>
            {(heading || subheading) && (
                <Stack align='center' spacing='20px'>
                    <Heading as='h2'>{heading}</Heading>
                    <Subheading>{subheading}</Subheading>
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

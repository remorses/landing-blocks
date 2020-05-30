import { Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type TestimonialsLogosProps = {
    heading?: ReactNode
    subheading?: ReactNode
    testimonials: ReactNode[]
    animate?: any
} & PageContainerProps

export function TestimonialsLogos({
    heading = '',
    subheading = '',
    testimonials,
    animate = undefined,
    ...rest
}: TestimonialsLogosProps) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer spacing='40px' py='20px' {...rest}>
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

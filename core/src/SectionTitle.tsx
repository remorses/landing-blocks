import { Box, Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Row, SubHeading, Heading, Button } from '.'
import { PageContainer, Col, FloatingElement } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'
import { GradientRect } from './decorations'

export function SectionTitle({
    heading,
    subhead,
    cta = '' as ReactNode,
    animate = true,
    ...rest
}) {
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 3,
    })
    return (
        <PageContainer ref={ref} {...rest}>
            <Stack
                alignSelf='center'
                maxW='700px'
                spacing='30px'
                align='center'
                textAlign='center'
            >
                {/* <Bullett>{bullett}</Bullett> */}
                <Heading as={animated.h2} style={animations[0]} fontSize='32px'>
                    {heading}
                </Heading>
                <SubHeading
                    as={animated.h4}
                    style={animations[1]}
                    fontSize='18px'
                    maxW='700px'
                >
                    {subhead}
                </SubHeading>
                {cta && (
                    <Col as={animated.div} style={animations[2]} align='center'>
                        {cta}
                    </Col>
                )}
            </Stack>
        </PageContainer>
    )
}

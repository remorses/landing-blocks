import { Box, Stack } from '@chakra-ui/core'
import React, { ReactNode, cloneElement } from 'react'
import { Row, SubHeading, Heading, Button } from '.'
import { PageContainer, Col, FloatingElement } from './layout'
import {  useFaded } from './hooks'

import { GradientRect } from './decorations'
import { clone } from './support'

export function SectionTitle({
    heading,
    subheading,
    cta = '' as ReactNode,
    animate = true,
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer {...rest}>
            <Stack
                as={Faded}
                alignSelf='center'
                maxW='700px'
                spacing='30px'
                align='center'
                textAlign='center'
            >
                {/* <Bullett>{bullett}</Bullett> */}
                <Heading fontSize='32px'>{heading}</Heading>
                <SubHeading fontSize='18px' maxW='700px'>
                    {subheading}
                </SubHeading>
                {cta && <Col align='center'>{clone(cta)}</Col>}
            </Stack>
        </PageContainer>
    )
}

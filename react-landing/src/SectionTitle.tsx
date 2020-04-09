import { Box, Stack, StackProps } from '@chakra-ui/core'
import React, { ReactNode, cloneElement } from 'react'
import { Row, Subheading, Heading, Button, Bullet } from '.'
import { PageContainer, Col, FloatingElement, PageContainerProps } from './layout'
import { useFaded } from './hooks'

import { GradientRect } from './decorations'
import { clone } from './support'

export type SectionTitleProps = {
    heading?: ReactNode
    subheading?: ReactNode
    cta?: ReactNode
    bullet?: ReactNode
    animate?: any
} & PageContainerProps

export function SectionTitle({
    heading = '',
    subheading = '',
    bullet = '',
    cta = '' as ReactNode,
    animate = true,
    ...rest
}: SectionTitleProps) {
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
                <Bullet>{bullet}</Bullet>
                <Heading fontSize='32px'>{heading}</Heading>
                <Subheading fontSize='18px'>
                    {subheading}
                </Subheading>
                {cta && <Col justify='center' align='center'>{clone(cta)}</Col>}
            </Stack>
        </PageContainer>
    )
}

import { Stack } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'
import { clone } from './support'
import { Bullet } from './Bullet'

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
    animate = undefined,
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
                <Subheading fontSize='18px'>{subheading}</Subheading>
                {cta && (
                    <Col justify='center' align='center'>
                        {clone(cta)}
                    </Col>
                )}
            </Stack>
        </PageContainer>
    )
}

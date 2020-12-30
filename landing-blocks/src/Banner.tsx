import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Bullet } from './Bullet'
import { Heading } from './Heading'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'
import { getPageContainerProps } from './support'

export type BannerProps = {
    heading?: ReactNode
    subheading?: ReactNode
    bullet?: ReactNode
    image?: ReactNode
    cta?: ReactNode
    flip?: boolean
    fingerprint?: ReactNode
    animate?: any
} & PageContainerProps

export function Banner({
    heading = '',
    subheading = '',
    bullet = '',
    cta = '' as ReactNode,
    image = null as any,
    flip = false,
    fingerprint = '',
    animate = undefined,
    ...props
}: BannerProps) {
    const [spacing, rest] = getPageContainerProps(props)
    const direction = flip ? 'row-reverse' : 'row'
    return (
        <PageContainer {...spacing}>
            <Stack
                align='center'
                spacing='40px'
                bg='gray.100'
                // isReversed={flip}
                direction={['column', null, direction]}
                w='100%'
                borderRadius='10px'
                p='30px'
                {...rest}
            >
                {image && flip && <Box flex='1' />}
                <Stack
                    spacing='20px'
                    minW='300px'
                    w={image ? 'auto' : '100%'}
                    justify='space-between'
                    align='stretch'
                    direction={['column', null, image ? 'column' : 'row']}
                >
                    <Stack spacing='20px'>
                        {bullet && <Bullet my='10px'>{bullet}</Bullet>}
                        <Heading
                            lineHeight='50px'
                            fontWeight='medium'
                            fontSize='heading'
                        >
                            {heading}
                        </Heading>
                        <Subheading
                            lineHeight='34px'
                            opacity={0.6}
                            maxW='600px'
                            fontWeight='normal'
                            fontSize='text'
                        >
                            {subheading}
                        </Subheading>
                    </Stack>
                    <Stack spacing='10px' w='auto' justify='center'>
                        <Box>{cta}</Box>
                        {fingerprint && (
                            <Box
                                opacity={0.4}
                                fontSize='subtext'
                                lineHeight='26px'
                            >
                                {fingerprint}
                            </Box>
                        )}
                    </Stack>
                </Stack>
                {image && !flip && <Box flex='1' />}
                {image && (
                    <Col
                        align='center'
                        // flex='1'
                        minW='300px'
                        minH='100%'
                        // my='-40px'
                    >
                        {image}
                    </Col>
                )}
            </Stack>
        </PageContainer>
    )
}

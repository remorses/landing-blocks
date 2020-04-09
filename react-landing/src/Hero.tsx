import React, { Fragment } from 'react'
import { Image, Flex, Box, Stack, Text, useColorMode } from '@chakra-ui/core'
import { Subheading } from './Subheading'
import { Heading } from './Heading'
import { Button } from './Button'
import { Col, Row, Spacer, PageContainer, FloatingElement } from './layout'
import { useFaded } from './hooks'

import { GradientRect } from './decorations'
import { useColor, clone } from './support'
import Color from 'color-js'
import { Bullet } from './Bullet'

export function Hero({
    heading,
    subheading,
    cta,
    image,
    bullet = '',
    animate = undefined,
    fingerprint = '',
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer {...rest}>
            <Row
                justify='flex-start'
                w='100%'
                flexDir={['column', 'column', 'row']}
                align='center'
            >
                <Stack
                    as={Faded}
                    maxW={['100%', null, image ? '500px' : '100%']}
                    spacing='40px'
                    align={[
                        'center',
                        'center',
                        image ? 'flex-start' : 'center',
                    ]}
                    textAlign={['center', 'center', image ? 'left' : 'center']}
                >
                    <Col align={['center', null, 'flex-start']}>
                        {bullet && <Bullet my='10px'>{bullet}</Bullet>}
                        <Heading fontSize='46px'>{heading}</Heading>
                    </Col>
                    <Subheading fontSize='22px' maxW='700px'>
                        {subheading}
                    </Subheading>
                    <Stack align={['center', 'center', 'flex-start']}>
                        <Box>{clone(cta)}</Box>
                        {/* <Button
                            px='40px'
                            bg='primary'
                            d='block'
                            width='auto'
                        ></Button> */}
                        <Box opacity={0.8} fontSize='13px' lineHeight='26px'>
                            {fingerprint}
                        </Box>
                    </Stack>
                </Stack>
                {image && (
                    <Row flexDir={['column', null, 'row']} as={Faded} flex='1'>
                        <Box ml='40px' mt='40px' flex='1' />
                        <Col
                            align='center'
                            // h='100%'
                        >
                            {image}
                        </Col>
                    </Row>
                )}
            </Row>
        </PageContainer>
    )
}

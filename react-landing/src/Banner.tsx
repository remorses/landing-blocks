import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC, ReactNode } from 'react'
import { Col, Row, Heading, Spacer, PageContainer, SubHeading, Button } from '.'
import { Text } from '@chakra-ui/core'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'
import { removeUndefined } from './support'

export function Banner({
    heading = '',
    subhead = '',
    cta = '' as ReactNode,
    image = null as any,
    flip = false,
    fingerprint = '',
    animate = true,
    ...props
}) {
    const { bg = 'gray.100', background, backgroundColor, ...rest } = props
    const bgs = removeUndefined({ bg, background, backgroundColor })
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 3,
    })
    const direction = flip ? 'row-reverse' : 'row'
    return (
        <PageContainer {...rest}>
            <Stack
                align='center'
                spacing='40px'
                isReversed={flip}
                flexDir={['column', null, direction]}
                w='100%'
                bg='primary'
                borderRadius='10px'
                p='40px'
                {...bgs}
            >
                <Stack
                    spacing='20px'
                    minW='400px'
                    w={image ? 'auto' : '100%'}
                    direction={image ? 'column' : 'row'}
                    justify='space-between'
                >
                    <Stack spacing='20px'>
                        <Heading
                            
                            
                            lineHeight='50px'
                            fontWeight='medium'
                            fontSize='36px'
                        >
                            {heading}
                        </Heading>
                        <SubHeading
                            
                            
                            lineHeight='34px'
                            m={0}
                            opacity={0.6}
                            fontWeight='normal'
                            fontSize='18px'
                        >
                            {subhead}
                        </SubHeading>
                    </Stack>
                    <Stack w='auto' justify='center'>
                        <Box>{cta}</Box>
                        {fingerprint && (
                            <Box
                                opacity={0.6}
                                fontSize='13px'
                                lineHeight='26px'
                            >
                                {fingerprint}
                            </Box>
                        )}
                    </Stack>
                </Stack>
                {image && <Box flex='1' />}
                {image && (
                    <Col
                        
                        
                        align='center'
                        // flex='1'
                        minW='400px'
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

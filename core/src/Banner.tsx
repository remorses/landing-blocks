import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer, PageContainer, SubHeading, Button } from '.'
import { Text } from '@chakra-ui/core'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'
import { removeUndefined } from './support'

export function Banner({
    heading = '',
    subhead = '',
    cta = '',
    image = null as any,
    flip = false,
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
        <PageContainer ref={ref} {...rest}>
            <Stack
                align='center'
                spacing='40px'
                isReversed={flip}
                flexDir={['column', null, direction]}
                bg='primary'
                borderRadius='10px'
                p='40px'
                {...bgs}
            >
                <Stack spacing='20px' minW='400px'>
                    <Heading
                        as={animated.h2}
                        style={animations[0]}
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='36px'
                    >
                        {heading}
                    </Heading>
                    <SubHeading
                        as={animated.p}
                        style={animations[1]}
                        lineHeight='34px'
                        m={0}
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='18px'
                    >
                        {subhead}
                    </SubHeading>
                    <Box>
                        <Button px='10px' flexGrow={0}>
                            {cta}
                        </Button>
                    </Box>
                </Stack>
                <Box flex='1' />
                <Col
                    as={animated.div}
                    style={animations[2]}
                    align='center'
                    flex='1'
                    minW='400px'
                    minH='100%'
                >
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}

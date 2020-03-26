import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer } from '.'
import { Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { PageContainer } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

export const HowItWorks = ({
    heading,
    subhead,
    steps,
    backgroundColor = 'transparent',
    animate = true,
    ...rest
}) => {
    return (
        <PageContainer py='120px' {...rest}>
            <Stack spacing={2} flex='1' textAlign='center' align='center'>
                <Heading lineHeight='50px' fontWeight='medium' fontSize='36px'>
                    {heading}
                </Heading>
                <Text
                    lineHeight='34px'
                    m={0}
                    opacity={0.6}
                    fontWeight='normal'
                    fontSize='16px'
                    maxW='500px'
                >
                    {subhead}
                </Text>
            </Stack>
            <Box mt='60px' />
            <Stack spacing={12} flex='1'>
                {steps.map((step, i) => (
                    <Step
                        key={i}
                        {...step}
                        animate={animate}
                        number={i + 1}
                        flip={i % 2 !== 0}
                    />
                ))}
            </Stack>
        </PageContainer>
    )
}

const Step = ({
    heading,
    subhead,
    number,
    image,
    flip = false,
    animate = true,
    ...rest
}) => {
    const dir = flip ? 'row-reverse' : 'row'
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 4,
    })
    return (
        <Stack
            flexDir={dir}
            justify='space-between'
            align='center'
            flexWrap='wrap'
            spacing='40px'
            ref={ref}
            {...rest}
        >
            <Stack minW='400px' maxW='500px' flex='1' spacing='20px'>
                <Stack
                    as={animated.div}
                    style={animations[0]}
                    flexDir='row'
                    align='flex-end'
                    opacity={0.1}
                >
                    <Heading lineHeight='70px' fontSize='80px'>
                        {number}
                    </Heading>
                    <Heading
                        isTruncated
                        maxW='300px'
                        fontWeight='bold'
                        fontSize='18px'
                    >
                        {'  .  ' + heading}
                    </Heading>
                </Stack>
                <Heading as={animated.h2} style={animations[1]} fontSize='20px'>
                    {heading}
                </Heading>
                <Text
                    as={animated.p}
                    style={animations[2]}
                    fontWeight='normal'
                    m={0}
                    lineHeight='28px'
                    opacity={0.7}
                    fontSize='16px'
                >
                    {subhead}
                </Text>
            </Stack>
            {/* <Box display={{sm: 'none', lg: 'block'}} ml='40px' /> */}
            <Col
                as={animated.div}
                style={animations[3]}
                minW='400px'
                maxW='500px'
                flex='1'
            >
                {image}
            </Col>
        </Stack>
    )
}

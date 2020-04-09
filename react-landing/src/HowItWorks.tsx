import { Box, Stack, Text } from '@chakra-ui/core'
import React from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer } from './layout'


export function HowItWorks({
    heading,
    subheading,
    steps,
    animate = undefined,
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer py='120px' {...rest}>
            <Stack
                as={Faded}
                spacing={2}
                flex='1'
                textAlign='center'
                align='center'
            >
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
                    {subheading}
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
    subheading,
    number,
    image,
    flip = false,
    animate = undefined,
    ...rest
}) => {
    const dir = flip ? 'row-reverse' : 'row'
    const { Faded } = useFaded({ animate })
    return (
        <Stack
            flexDir={dir}
            justify='space-between'
            align='center'
            flexWrap='wrap'
            spacing='40px'
            {...rest}
        >
            <Stack as={Faded} minW='300px' maxW='500px' flex='1' spacing='20px'>
                <Stack flexDir='row' align='flex-end'>
                    <Heading opacity={0.14} lineHeight='70px' fontSize='80px'>
                        {number}
                    </Heading>
                    <Heading
                        opacity={0.2}
                        isTruncated
                        maxW='300px'
                        fontWeight='bold'
                        fontSize='18px'
                    >
                        {'  .  ' + heading}
                    </Heading>
                </Stack>
                <Box>
                    <Heading fontSize='20px'>{heading}</Heading>
                </Box>
                <Box>
                    <Text
                        fontWeight='normal'
                        m={0}
                        lineHeight='28px'
                        opacity={0.7}
                        fontSize='16px'
                    >
                        {subheading}
                    </Text>
                </Box>
            </Stack>
            <Col as={Faded} minW='300px' maxW='500px' flex='1'>
                {image}
            </Col>
        </Stack>
    )
}

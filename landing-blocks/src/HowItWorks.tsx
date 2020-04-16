import { Box, Stack, Text } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type HowItWorksProps = {
    heading?: ReactNode
    subheading?: ReactNode
    steps: StepProps[]
    animate?: any
} & PageContainerProps

export type StepProps = {
    heading?: ReactNode
    subheading?: ReactNode
    image?: ReactNode
    animate?: any
}

export function HowItWorks({
    heading,
    subheading,
    steps,
    animate = undefined,
    ...rest
}: HowItWorksProps) {
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
                <Heading
                    lineHeight='50px'
                    fontWeight='medium'
                    fontSize='heading'
                >
                    {heading}
                </Heading>
                <Box
                    lineHeight='34px'
                    m={0}
                    opacity={0.6}
                    fontWeight='normal'
                    fontSize='text'
                    maxW='500px'
                >
                    {subheading}
                </Box>
            </Stack>
            <Box mt='60px' />
            <Stack spacing={12} flex='1'>
                {steps.map((step, i) => (
                    <Step
                        key={i}
                        animate={animate}
                        number={i + 1}
                        flip={i % 2 !== 0}
                        {...step}
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
}: any) => {
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
                <Stack isInline flexDirection='row' align='flex-end'>
                    <Box  lineHeight='60px' opacity={0.14} fontSize='80px'>
                        {number}
                    </Box>
                    <Heading
                        opacity={0.3}
                        isTruncated
                        maxW='300px'
                        fontWeight='bold'
                        fontSize='text'
                    >
                        {'. ' + heading}
                    </Heading>
                </Stack>
                <Box>
                    <Subheading fontWeight='medium'>{heading}</Subheading>
                </Box>
                <Box>
                    <Box
                        fontWeight='normal'
                        m={0}
                        lineHeight='28px'
                        opacity={0.7}
                        fontSize='text'
                    >
                        {subheading}
                    </Box>
                </Box>
            </Stack>
            <Col as={Faded} minW='300px' maxW='500px' flex='1'>
                {image}
            </Col>
        </Stack>
    )
}

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
                spacing='40px'
                flex='1'
                textAlign='center'
                align='center'
            >
                <Heading
                    lineHeight='50px'
                    // fontWeight='medium'
                >
                    {heading}
                </Heading>
                <Subheading maxW='700px'>{subheading}</Subheading>
            </Stack>
            <Box mt='60px' />
            <Stack spacing='60px' flex='1'>
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
            // spacing='40px'
            {...rest}
        >
            <Stack as={Faded} minW='300px' maxW='500px' flex='1' spacing='40px'>
                <Stack
                    isInline
                    flexDirection='row'
                    align='flex-end'
                    opacity={0.2}
                >
                    <Box lineHeight='60px' fontSize='80px'>
                        {number}
                    </Box>
                    <Heading
                        isTruncated
                        maxW='300px'
                        fontWeight='bold'
                        fontSize='text'
                    >
                        {'. ' + heading}
                    </Heading>
                </Stack>
                <Subheading fontWeight='medium'>{heading}</Subheading>
                <Box>
                    <Box
                        fontWeight='normal'
                        m={0}
                        lineHeight='1.8em'
                        opacity={0.7}
                        fontSize='subtext'
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

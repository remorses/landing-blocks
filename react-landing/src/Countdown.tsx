import { Box, Stack } from '@chakra-ui/core'
import React, { ReactNode, useEffect, useState } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'
import { clone } from './support'
import { Bullet } from './Bullet'

export type CountdownProps = {
    heading?: ReactNode
    subheading?: ReactNode
    cta?: ReactNode
    bullet?: ReactNode
    deadline: Date
    animate?: any
} & PageContainerProps

export function Countdown({
    heading = '',
    subheading = '',
    deadline,
    bullet = '',
    cta = '' as ReactNode,
    animate = undefined,
    ...rest
}: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft({ deadline }))
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft({ deadline }))
        }, 1000)
    })

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
                <Heading>{heading}</Heading>
                <Subheading fontSize='text'>{subheading}</Subheading>
                <Stack spacing='20px' direction='row'>
                    {Object.keys(timeLeft).map((timeName, index) => {
                        const remaining: string = timeLeft[timeName]
                        const isLast =
                            index === Object.keys(timeLeft).length - 1
                        return (
                            <Stack
                                direction='row'
                                spacing='20px'
                                key={timeName}
                                // fontSize='text'
                            >
                                <Stack spacing='10px' align='center'>
                                    <Box>
                                        {remaining.split('').map((d, i) => (
                                            <AnimatedDigit
                                                fontSize='62px'
                                                height='62px'
                                                digit={d}
                                                key={i}
                                            />
                                        ))}
                                    </Box>
                                    <Box letterSpacing='2px' opacity={0.6}>
                                        {timeName.toUpperCase()}
                                    </Box>
                                </Stack>
                                {!isLast && (
                                    <Box opacity={0.8} fontSize='52px'>
                                        :
                                    </Box>
                                )}
                            </Stack>
                        )
                    })}
                </Stack>
                {cta && (
                    <Col justify='center' align='center'>
                        {clone(cta)}
                    </Col>
                )}
            </Stack>
        </PageContainer>
    )
}

const calculateTimeLeft = ({ deadline }: { deadline: Date }) => {
    const difference = +new Date(deadline) - +new Date()
    let timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    }
    timeLeft = Object.assign(
        {},
        ...Object.keys(timeLeft).map((k) => ({
            [k]: padZeros(timeLeft[k], 2),
        })),
    )
    return timeLeft
}

function padZeros(number, length) {
    var my_string = '' + number
    while (my_string.length < length) {
        my_string = '0' + my_string
    }

    return my_string
}

const AnimatedDigit = ({ digit, ...rest }) => {
    const height = 160
    const [translate, setTranslate] = useState('translate3d(0, 0, 0)')
    // console.log({ translate })
    useEffect(() => {
        const y = -Number(digit) * height
        setTranslate(`translate3d(0, ${y}px, 0)`)
    }, [digit])
    return (
        <Box mx='2px' display='inline-block' overflow='hidden' {...rest}>
            <Box transition='0.3s ease all' transform={translate}>
                {'0123456789'.split('').map((d) => (
                    <Box key={d} height={height + 'px'}>
                        {d}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

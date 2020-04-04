import {
    Heading as H,
    HeadingProps,
    Stack,
    Box,
    StackProps,
} from '@chakra-ui/core'
import React, { FC, ReactElement, ElementType, ReactNode } from 'react'
import {
    Col,
    Row,
    Heading,
    Spacer,
    PageContainer,
    SubHeading,
    Button,
    PageContainerProps,
} from '.'
import { Text } from '@chakra-ui/core'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'
import { removeUndefined } from './support'

export interface PricingProps {
    heading?: ReactNode
    subhead?: ReactNode
    features: string[]
    animate?: boolean
    prices: {
        background?: string
        heading?: ReactNode
        subhead?: ReactNode
        cta?: ReactNode
        features: ReactNode[]
        price: string
    }[]
}

export function Pricing({
    heading = 'Simple Pricing',
    subhead = 'Real value for your work life',
    features = [],
    prices = [],
    animate = true,
    ...props
}: PageContainerProps & PricingProps) {
    const { bg = 'gray.100', background, backgroundColor, ...rest } = props
    const bgs = removeUndefined({ bg, background, backgroundColor })
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 3,
    })
    const belowPrice = '/ month'
    const featuresWidth = '370px'
    const pricingColumnWidth = '200px'
    const priceSectionsProps = {
        w: pricingColumnWidth,
        align: 'center',
        p: '20px',
        h: '100%',
    }
    return (
        <PageContainer ref={ref} {...rest}>
            <Stack spacing='0px'>
                <Stack flexDir='row'>
                    <Stack minW={featuresWidth} maxW={featuresWidth}>
                        <Box fontWeight='medium' fontSize='24px'>
                            {heading}
                        </Box>
                        <Box opacity={0.7}>{subhead}</Box>
                    </Stack>
                    <Stack
                        align='stretch'
                        w='100%'
                        flexDir='row'
                        justify='space-between'
                    >
                        {prices.map((priceSection) => (
                            <Stack spacing='0px' {...priceSectionsProps} p='0'>
                                <Box fontWeight='medium'>
                                    {priceSection.heading}
                                </Box>
                                <Box fontSize='14px' opacity={0.7}>
                                    {priceSection.subhead}
                                </Box>
                                <Box h='20px' />
                                <Stack
                                    {...priceSectionsProps}
                                    background={
                                        priceSection.background || 'transparent'
                                    }
                                    borderRadius='10px 10px 0 0'
                                >
                                    <Stack
                                        align='center'
                                        px='40px'
                                        spacing='20px'
                                    >
                                        <Box
                                            fontWeight='semibold'
                                            fontSize='38px'
                                        >
                                            {priceSection.price}
                                        </Box>
                                        <Box fontSize='14px' opacity={0.7}>
                                            {belowPrice}
                                        </Box>
                                        <Stack
                                            fontWeight='medium'
                                            align='center'
                                            minH='20px'
                                        >
                                            {priceSection.cta}
                                        </Stack>
                                    </Stack>
                                    <Box h='40px' w='100%' />
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                <Stack flexDir='row'>
                    <Stack
                        spacing='20px'
                        minW={featuresWidth}
                        maxW={featuresWidth}
                    >
                        {features.map((x) => (
                            <Box minH='30px'>{x}</Box>
                        ))}
                    </Stack>
                    <Stack
                        w='100%'
                        flexDir='row'
                        justify='space-between'
                        fontWeight='medium'
                    >
                        {prices.map((priceSection) => (
                            <Stack
                                {...priceSectionsProps}
                                pt='0'
                                background={
                                    priceSection.background || 'transparent'
                                }
                                borderRadius='0 0 10px 10px'
                            >
                                <Stack spacing='20px'>
                                    {priceSection.features.map((x) => (
                                        <Box minH='30px'>{x}</Box>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </PageContainer>
    )
}

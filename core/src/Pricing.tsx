import {
    Heading as H,
    HeadingProps,
    Stack,
    Box,
    StackProps,
    Divider,
    DarkMode,
} from '@chakra-ui/core'
import React, {
    FC,
    ReactElement,
    ElementType,
    ReactNode,
    Fragment,
} from 'react'
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
import { useFadeUpAnimation, useMyColorMode } from './hooks'
import { animated } from 'react-spring'
import { removeUndefined, useColor } from './support'
import Color from 'color-js'
import { darkStyles } from './layout'

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
    ...rest
}: PageContainerProps & PricingProps) {
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 3,
    })
    const belowPrice = '/ month'
    const featuresWidth = '370px'
    const pricingHeaderMinH = '160px'
    const pricingNamesMinH = '60px'
    const { colorMode } = useMyColorMode(rest)

    return (
        <PageContainer ref={ref} {...rest}>
            <Stack flexDir={['column', null, 'row']}>
                <Stack minW={featuresWidth} display={['none', null, 'flex']}>
                    <Stack minH={pricingNamesMinH}>
                        <Box fontWeight='medium' fontSize='24px'>
                            {heading}
                        </Box>
                        <Box opacity={0.7}>{subhead}</Box>
                    </Stack>
                    <Box h={pricingHeaderMinH} />
                    <Stack flexDir='row'>
                        <Stack spacing='20px'>
                            {features.map((x) => (
                                <Box minH='30px'>{x}</Box>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack align='center' display={['flex', null, 'none']}>
                    <Box fontWeight='medium' fontSize='24px'>
                        {heading}
                    </Box>
                    <Box opacity={0.7}>{subhead}</Box>
                    <Box h='100px' />
                </Stack>
                <Stack
                    align={['center', null, 'flex-start']}
                    w='100%'
                    flexDir={['column', null, 'row']}
                    justify='space-between'
                    spacing={['100px']}
                >
                    {prices.map((x) => (
                        <Box w='100%' h='100%'>
                            <Divider display={['block', null, 'none']} />
                            <PriceColumn
                                priceSection={x}
                                belowPrice={belowPrice}
                                features={features}
                                pricingHeaderMinH={pricingHeaderMinH}
                                pricingNamesMinH={pricingNamesMinH}
                                dark={colorMode === 'dark'}
                                h='100%'
                                w={['100%', null, '200px']}
                            />
                            <Divider display={['block', null, 'none']} />
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </PageContainer>
    )
}

function PriceColumn({
    priceSection,
    belowPrice,
    pricingNamesMinH,
    pricingHeaderMinH,
    features,
    dark,
    ...rest
}) {
    const realBg = useColor(priceSection.background || (dark ? '#000' : '#fff'))
    console.log({ realBg })
    const lightness = Color(realBg as any).getLightness()
    const isDark = lightness < 0.7
    const Mode = isDark ? DarkMode : Fragment
    return (
        <Stack align='center' {...rest}>
            <Stack
                align='center'
                minH={['none', null, pricingNamesMinH]}
                maxH={['none', null, pricingNamesMinH]}
            >
                <Box fontWeight='medium'>{priceSection.heading}</Box>
                <Box fontSize='14px' opacity={0.7}>
                    {priceSection.subhead}
                </Box>
            </Stack>
            <Mode>
                <Stack
                    w='100%'
                    h='100%'
                    align='center'
                    bg={priceSection.background || 'transparent'}
                    borderRadius='10px'
                    {...(isDark ? darkStyles : {})}
                    p={['20px', null, '0']}
                >
                    <Stack
                        align='center'
                        spacing='10px'
                        minH={['none', null, pricingHeaderMinH]}
                        maxH={['none', null, pricingHeaderMinH]}
                        py='20px'
                    >
                        <Box fontWeight='semibold' fontSize='38px'>
                            {priceSection.price}
                        </Box>
                        <Box fontSize='14px' opacity={0.7}>
                            {belowPrice}
                        </Box>
                        <Stack fontWeight='medium' align='center' minH='20px'>
                            {priceSection.cta}
                        </Stack>
                    </Stack>

                    <Stack spacing='20px'>
                        {features.map((x, i) => {
                            const feature = priceSection.features[i]
                            if (!feature) {
                                return null
                            }
                            return (
                                <Stack minH='30px' px={['10px', null, '0px']}>
                                    <Box
                                        display={['block', null, 'none']}
                                        opacity={0.6}
                                        fontWeight='normal'
                                    >
                                        {x}
                                    </Box>
                                    <Box>{feature}</Box>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
            </Mode>
        </Stack>
    )
}

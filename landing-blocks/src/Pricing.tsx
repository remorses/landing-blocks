import { Box, DarkMode, Divider, Stack, StackProps } from '@chakra-ui/core'
import Color from 'color-js'
import React, { Fragment, ReactNode } from 'react'
import { Heading } from './Heading'
import { useMyColorMode } from './hooks'
import { darkStyles, PageContainer, PageContainerProps } from './layout'
import { useColor } from './support'

const featureLineMinH = '36px'
const featuresWidth = '370px'
const pricingHeaderMinH = '160px'
const pricingNamesMinH = '60px'

export type PricingProps = {
    heading?: ReactNode
    subheading?: ReactNode
    animate?: boolean
    features: string[]
    prices: PriceColumnType[]
} & PageContainerProps

export interface PriceColumnType {
    background?: string
    heading?: ReactNode
    subheading?: ReactNode
    cta?: ReactNode
    features: ReactNode[]
    price: string
}

export function Pricing({
    heading = 'Simple Pricing',
    subheading = 'Real value for your work life',
    features = [],
    prices = [],
    animate = undefined,
    ...rest
}: PricingProps) {
    const belowPrice = '/ month'
    const { colorMode } = useMyColorMode(rest)

    return (
        <PageContainer {...rest}>
            <Stack flexDir={['column', null, 'row']}>
                <Stack minW={featuresWidth} display={['none', null, 'flex']}>
                    <Stack minH={pricingNamesMinH}>
                        <Box fontWeight='medium' fontSize='subheading'>
                            {heading}
                        </Box>
                        <Box opacity={0.7}>{subheading}</Box>
                    </Stack>
                    <Box h={pricingHeaderMinH} />
                    <Stack flexDir='row'>
                        <Stack spacing='20px'>
                            {features.map((x) => (
                                <Box textAlign='right' minH={featureLineMinH}>
                                    {x}
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack align='center' display={['flex', null, 'none']}>
                    <Box fontWeight='medium' fontSize='subheading'>
                        {heading}
                    </Box>
                    <Box opacity={0.7}>{subheading}</Box>
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
    features,
    dark,
    ...rest
}: {
    priceSection: PriceColumnType
    belowPrice: string
    features: string[]
    dark?: boolean
} & StackProps) {
    const realBg = useColor(priceSection.background || (dark ? '#000' : '#fff'))
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
                <Box fontSize='subtext' opacity={0.7}>
                    {priceSection.subheading}
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
                        <Heading textAlign='center' fontWeight='semibold' >
                            {priceSection.price}
                        </Heading>
                        <Box fontSize='subtext' opacity={0.7}>
                            {belowPrice}
                        </Box>
                        {/* <Stack fontWeight='medium' align='center' minH='30px'>
                            {priceSection.cta}
                        </Stack> */}
                    </Stack>

                    <Stack spacing='20px'>
                        {features.map((x, i) => {
                            const feature = priceSection.features[i]
                            if (!feature) {
                                return null
                            }
                            return (
                                <Stack
                                    minH={featureLineMinH}
                                    px={['10px', null, '0px']}
                                >
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
                    <Box flex='1' />
                    <Stack
                        p='20px'
                        fontWeight='medium'
                        align='center'
                        minH='30px'
                    >
                        {priceSection.cta}
                    </Stack>
                </Stack>
            </Mode>
        </Stack>
    )
}

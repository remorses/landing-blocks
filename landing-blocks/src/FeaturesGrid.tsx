import { SimpleGrid } from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type FeaturesGridProps = {
    heading?: ReactNode
    subheading?: ReactNode
    centerText?: boolean
    features: {
        heading?: ReactNode
        subheading?: ReactNode
        icon?: ReactNode
    }[]
    animate?: any
} & PageContainerProps

export function FeaturesGrid({
    heading = '',
    subheading = '',
    features,
    centerText = false,
    animate = undefined,
    ...rest
}: FeaturesGridProps) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer spacing='40px' py='40px' {...rest}>
            <Stack
                as={Faded}
                spacing='40px'
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
                <Subheading>{subheading}</Subheading>
            </Stack>
            <SimpleGrid
                // minChildWidth='200px'
                spacing='20px'
                flex='1'
                columns={[1, 1, 2, 3, 4]}
                as={Faded}
            >
                {features.map((step, i) => (
                    <Feature
                        minW={['100%', '100%', '0']}
                        flex='1'
                        key={i}
                        centerText={centerText}
                        {...step}
                    />
                ))}
            </SimpleGrid>
        </PageContainer>
    )
}

const Feature = ({
    heading = '',
    subheading = '',
    icon = '',
    centerText,
    ...rest
}: any) => {
    return (
        <Stack
            textAlign={centerText ? 'center' : 'left'}
            w='auto'
            spacing='10px'
            p='20px'
            {...rest}
        >
            <Col w='40px' alignSelf={centerText ? 'center' : 'flex-start'}>
                {icon}
            </Col>
            <Heading fontSize='text' fontWeight='semibold'>
                {heading}
            </Heading>
            <Box fontSize='text' opacity={0.8} lineHeight='24px'>
                {subheading}
            </Box>
        </Stack>
    )
}

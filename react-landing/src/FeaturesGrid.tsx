import {
    Heading as H,
    HeadingProps,
    Stack,
    Box,
    SimpleGrid,
} from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer } from '.'
import { Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { PageContainer } from './layout'
import { useFadeUpAnimation, useFaded } from './hooks'
import { animated } from 'react-spring'

export function FeaturesGrid({
    heading = '',
    subhead = '',
    features,
    centerText = false,
    animate = true,
    ...rest
}) {
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
                <Heading lineHeight='50px' fontWeight='medium' fontSize='36px'>
                    {heading}
                </Heading>
                <SubHeading>{subhead}</SubHeading>
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

const Feature = ({ heading, subhead, icon, centerText, ...rest }) => {
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
            <Heading fontSize='16px' fontWeight='semibold'>
                {heading}
            </Heading>
            <Text m={0} fontSize='16px' opacity={0.8} lineHeight='24px'>
                {subhead}
            </Text>
        </Stack>
    )
}

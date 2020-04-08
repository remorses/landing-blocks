import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer } from '.'
import { Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { PageContainer } from './layout'
import {  useFaded } from './hooks'


export function FeaturesList({
    heading = '',
    subheading = '',
    features,
    centerText = false,
    animate = true,
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer {...rest}>
            {heading && subheading && (
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
                        fontSize='36px'
                    >
                        {heading}
                    </Heading>
                    <SubHeading>{subheading}</SubHeading>
                </Stack>
            )}
            <Stack
                as={Faded}
                flexDir='row'
                spacing='20px'
                flex='1'
                flexWrap='wrap'
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
            </Stack>
        </PageContainer>
    )
}

const Feature = ({ heading, subheading, icon, centerText, ...rest }) => {
    
    return (
        <Stack
            textAlign={centerText ? 'center' : 'left'}
            w='auto'
            spacing='20px'
            p='40px'
            {...rest}
        >
            <Col
                minW='40px'
                maxW='140px'
                fontWeight='medium'
                alignSelf={centerText ? 'center' : 'flex-start'}
            >
                {icon}
            </Col>
            <Heading fontSize='20px'>{heading}</Heading>
            <Text m={0} fontSize='18px' opacity={0.6} lineHeight='30px'>
                {subheading}
            </Text>
        </Stack>
    )
}

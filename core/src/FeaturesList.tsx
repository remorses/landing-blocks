import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer } from '.'
import { Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { PageContainer } from './layout'

export const FeaturesList = ({
    heading,
    subhead = '',
    features,
    backgroundColor = 'transparent',
    ...rest
}) => {
    return (
        <PageContainer py='120px' bg={backgroundColor} {...rest}>
            <Stack spacing='40px' flex='1' textAlign='center' align='center'>
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
                    {subhead}
                </Text>
            </Stack>
            <Stack flexDir='row' spacing='20px' flex='1' flexWrap='wrap'>
                {features.map((step, i) => (
                    <Feature minW={{sm: '100%', lg: '0'}} flex='1' key={i} {...step} />
                ))}
            </Stack>
        </PageContainer>
    )
}

const Feature = ({ heading, subhead, icon, ...rest }) => {
    return (
        <Stack w='auto' spacing='20px' p='40px' {...rest}>
            <Box >{icon}</Box>
            <Heading fontSize='20px'>{heading}</Heading>
            <Text m={0} fontSize='18px' opacity={0.6} lineHeight='30px'>
                {subhead}
            </Text>
        </Stack>
    )
}

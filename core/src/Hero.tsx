import React from 'react'
import { Image, Flex, Box, Stack, Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { Heading } from './Heading'
import { Button } from './Button'
import { Col, Row, Spacer, PageContainer } from './layout'

export const Hero = ({
    heading,
    subhead,
    cta,
    image,
    bullett = '',
    ...rest
}) => (
    <PageContainer {...rest}>
        <Row
            justify='flex-start'
            w='100%'
            flexDir={{ sm: 'column', lg: 'row' }}
            align='center'
        >
            <Stack
                maxW={{ sm: 'none', lg: '500px' }}
                spacing='30px'
                align={{sm: 'center', lg: 'flex-start'}}
                textAlign={{ sm: 'center', lg: 'left' }}
            >
                {/* <Bullett>{bullett}</Bullett> */}
                <Heading fontSize='46px'>{heading}</Heading>
                <SubHeading fontSize='22px'>{subhead}</SubHeading>
                <Col align={['center', 'center', 'flex-start']}>
                    <Button px='40px' bg='primary' d='block' width='auto'>
                        {cta}
                    </Button>
                </Col>
            </Stack>
            <Box ml='40px' mt='40px' flex='1' />
            <Col align='center' maxW={{ sm: 'none', lg: '500px' }}>
                {image}
            </Col>
        </Row>
    </PageContainer>
)

export const Bullett = (props) => {
    return (
        <Text
            w='fit-content'
            px='20px'
            bg='gray.200'
            borderRadius='10px'
            {...props}
        />
    )
}

import React from 'react'
import { Image, Flex, Box, Stack } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { Heading } from './Heading'
import { Button } from './Button'
import { Col, Row, Spacer, PageContainer } from './layout'

export const Hero = ({ heading, subhead, cta, image }) => (
    <PageContainer>
        <Row justify='flex-start' w='100%'>
            <Stack spacing='30px' maxW='500px'>
                <Heading fontSize='46px'>{heading}</Heading>
                <SubHeading fontSize='22px'>{subhead}</SubHeading>
                <Col align={['center', 'center', 'flex-start']}>
                    <Button px='40px' bg='primary' d='block' width='auto'>
                        {cta}
                    </Button>
                </Col>
            </Stack>
            <Box ml='40px' flex='1' />
            <Col maxW='500px'>{image}</Col>
        </Row>
    </PageContainer>
)

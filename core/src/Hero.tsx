import React from 'react'
import { Image, Flex, Box, Stack } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { Heading } from './Heading'
import { Button } from './Button'
import { Col, Row, Spacer } from './layout'

export const Hero = ({
    bg = 'white',
    heading,
    subhead,
    cta,
    image,
    backgroundImage = null,
    bgOpacity = 1,
    style = {},
    ...props
}) => (
    <Box display='relative'>
        {backgroundImage && (
            <Box
                display='absolute'
                top={0}
                right={0}
                bottom={0}
                left={0}
                zIndex={-2}
                style={{ height: '100%' }}
            >
                <Image
                    src={backgroundImage}
                    alt=''
                    width={1}
                    style={{ height: '100%', objectFit: 'cover' }}
                />
            </Box>
        )}
        <Box
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={-1}
            bg={bg}
            style={{ opacity: backgroundImage ? bgOpacity : 1, height: '100%' }}
        />
        <Row {...props} justify='center' align='flex-start'>
            <Stack spacing={4} maxW='500px'>
                <Heading fontSize='46px'>{heading}</Heading>
                <SubHeading fontSize='22px'>{subhead}</SubHeading>
                <Col align={['center', 'center', 'flex-start']}>
                    <Button bg='primary' d='block' width='auto'>
                        {cta}
                    </Button>
                </Col>
            </Stack>
            <Box ml='40px' />
            <Col maxW='500px'>{image}</Col>
        </Row>
    </Box>
)

import React, { Fragment } from 'react'
import { Image, Flex, Box, Stack, Text } from '@chakra-ui/core'
import { SubHeading } from './SubHeading'
import { Heading } from './Heading'
import { Button } from './Button'
import { Col, Row, Spacer, PageContainer } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

export const Hero = ({
    heading,
    subhead,
    cta,
    image,
    bullett = '',
    animate = true,
    ...rest
}) => {
    const { ref, animations } = useFadeUpAnimation({ enabled: animate, number: 4 })
    return (
        <PageContainer {...rest}>
            <Row
                justify='flex-start'
                w='100%'
                flexDir={{ sm: 'column', lg: 'row' }}
                align='center'
                ref={ref}
            >
                <Stack
                    maxW={{ sm: 'none', lg: image ? '500px' : 'none' }}
                    spacing='30px'
                    align={{
                        sm: 'center',
                        lg: image ? 'flex-start' : 'center',
                    }}
                    textAlign={{ sm: 'center', lg: image ? 'left' : 'center' }}
                >
                    {/* <Bullett>{bullett}</Bullett> */}
                    <Heading
                        as={animated.h1}
                        style={animations[0]}
                        fontSize='46px'
                    >
                        {heading}
                    </Heading>
                    <SubHeading
                        as={animated.h2}
                        style={animations[1]}
                        fontSize='22px'
                        maxW='700px'
                    >
                        {subhead}
                    </SubHeading>
                    <Col
                        as={animated.div}
                        style={animations[2]}
                        align={['center', 'center', 'flex-start']}
                    >
                        <Button px='40px' bg='primary' d='block' width='auto'>
                            {cta}
                        </Button>
                    </Col>
                </Stack>
                {image && (
                    <Fragment>
                        <Box ml='40px' mt='40px' flex='1' />
                        <Col
                            as={animated.div}
                            style={animations[3]}
                            align='center'
                            maxW={{ sm: 'none', lg: '500px' }}
                        >
                            {image}
                        </Col>
                    </Fragment>
                )}
            </Row>
        </PageContainer>
    )
}

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

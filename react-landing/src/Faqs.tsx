import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack, Heading, Button } from '@chakra-ui/core'
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/core'
import { Row, SubHeading } from '.'
import { PageContainer, Col } from './layout'
import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

export function Faqs({
    heading = '',
    subhead = '',
    faqs,
    animate = true,
    ...rest
}) {
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: 2,
    })
    return (
        <PageContainer ref={ref} {...rest}>
            <Stack
                alignSelf='center'
                spacing='30px'
                align='center'
                textAlign='center'
                minWidth='100%'
                style={animations[0]}
                as={animated.div}
            >
                {/* <Bullett>{bullett}</Bullett> */}
                <Heading as={animated.h2} style={animations[0]} fontSize='32px'>
                    {heading}
                </Heading>
                <SubHeading
                    as={animated.h4}
                    style={animations[1]}
                    fontSize='18px'
                    maxW='700px'
                >
                    {subhead}
                </SubHeading>
                <Accordion allowToggle minWidth='100%'>
                    {faqs.map((x) => (
                        <AccordionItem key={x.question} minWidth='100%'>
                            <AccordionHeader minH='60px'>
                                <Box
                                    fontSize='24px'
                                    fontWeight='medium'
                                    flex='1'
                                    textAlign='left'
                                >
                                    {x.question}
                                </Box>
                                <AccordionIcon size='40px' />
                            </AccordionHeader>
                            <AccordionPanel
                                py='20px'
                                minH='100px'
                                textAlign='left'
                            >
                                {x.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Stack>
        </PageContainer>
    )
}

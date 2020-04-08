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
import {  useFaded } from './hooks'


export function Faqs({
    heading = '',
    subheading = '',
    faqs,
    animate = true,
    ...rest
}) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer {...rest}>
            <Stack
                as={Faded}
                alignSelf='center'
                spacing='30px'
                align='center'
                textAlign='center'
                minWidth='100%'
            >
                {/* <Bullett>{bullett}</Bullett> */}
                <Heading fontSize='32px'>{heading}</Heading>
                <SubHeading fontSize='18px' maxW='700px'>
                    {subheading}
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

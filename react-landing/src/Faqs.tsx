import { Accordion, AccordionHeader, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Stack } from '@chakra-ui/core'
import React from 'react'
import { useFaded } from './hooks'
import { PageContainer } from './layout'
import { Subheading } from './Subheading'


export function Faqs({
    heading = '',
    subheading = '',
    faqs,
    animate = undefined,
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
                <Subheading fontSize='18px' maxW='700px'>
                    {subheading}
                </Subheading>
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

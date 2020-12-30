import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Heading } from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useFaded } from './hooks'
import { PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type FaqsProps = {
    heading?: ReactNode
    subheading?: ReactNode
    faqs: {
        question: ReactNode
        answer: ReactNode
    }[]
    animate?: any
} & PageContainerProps

export function Faqs({
    heading = '',
    subheading = '',
    faqs,
    animate = undefined,
    ...rest
}: FaqsProps) {
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
                <Heading>{heading}</Heading>
                <Subheading fontSize='text' maxW='700px'>
                    {subheading}
                </Subheading>
                <Accordion allowToggle minWidth='100%'>
                    {faqs.map((x) => (
                        <AccordionItem
                            key={x.question.toString()}
                            minWidth='100%'
                        >
                            <AccordionButton minH='60px'>
                                <Box
                                    fontSize='24px'
                                    fontWeight='medium'
                                    flex='1'
                                    textAlign='left'
                                >
                                    {x.question}
                                </Box>
                                <AccordionIcon boxSize='40px' />
                            </AccordionButton>
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

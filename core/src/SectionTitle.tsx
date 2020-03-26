import { Box, Stack, } from '@chakra-ui/core'
import React from 'react'
import { Row, SubHeading, Heading, Button } from '.'
import { PageContainer, Col } from './layout'

export const SectionTitle = ({ heading, subhead, cta='', ...rest }) => {
    return (
        <PageContainer {...rest} >
            <Stack
                alignSelf='center'
                maxW='700px'
                spacing='30px'
                align='center'
                textAlign='center'
            >
                {/* <Bullett>{bullett}</Bullett> */}
                <Heading fontSize='46px'>{heading}</Heading>
                <SubHeading fontSize='22px' maxW='700px'>
                    {subhead}
                </SubHeading>
                {cta && (
                    <Col align='center'>
                        <Button>{cta}</Button>
                    </Col>
                )}
            </Stack>
        </PageContainer>
    )
}

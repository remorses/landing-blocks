import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack, Flex } from '@chakra-ui/core'
import { Row, Heading, Subheading } from '.'
import { PageContainer, Col } from './layout'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import {  useFaded } from './hooks'


function convertUrlToTweetId(url: string) {
    if (url.startsWith('http')) {
        const path = new URL(url).pathname
        return path.split('/').reverse()[0]
    }
    return url
}

export function TestimonialsTweets({
    heading = '',
    subheading = '',
    tweets = [],
    animate = undefined,
    ...rest
}) {
    tweets = tweets.map(convertUrlToTweetId)
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer spacing='20px' py='20px' {...rest}>
            {(heading || subheading) && (
                <Stack align='center' spacing='20px'>
                    <Heading as='h2'>{heading}</Heading>
                    <Subheading>{subheading}</Subheading>
                </Stack>
            )}
            <Col
                as={Faded}
                flexDir={['column', 'column', 'row']}
                justify='space-evenly'
                align='center'
                flexWrap='wrap'
            >
                {tweets.map((id, i) => (
                    <Col
                        mx='40px'
                        my='20px'
                        key={i}
                        // w={['100%', '100%', '320px']}
                    >
                        <TwitterTweetEmbed
                            placeholder={
                                <Box
                                    bg='#fff'
                                    width='400px'
                                    border='1px solid #ddd'
                                    borderRadius='10px'
                                    height='200px'
                                />
                            }
                            tweetId={id}
                        />
                    </Col>
                ))}
            </Col>
        </PageContainer>
    )
}

import React, { ReactNode, useContext } from 'react'
import Color from 'color-js'
import { Box, Text, Stack, Flex } from '@chakra-ui/core'
import { Row, Heading, SubHeading } from '.'
import { PageContainer, Col } from './layout'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import { useFadeUpAnimation } from './hooks'
import { animated } from 'react-spring'

function convertUrlToTweetId(url: string) {
    if (url.startsWith('http')) {
        const path = new URL(url).pathname
        return path.split('/').reverse()[0]
    }
    return url
}

export function TestimonialsTweets({
    heading = '',
    subhead = '',
    tweets = [],
    animate = true,
    ...rest
}) {
    tweets = tweets.map(convertUrlToTweetId)
    const { ref, animations } = useFadeUpAnimation({
        enabled: animate,
        number: tweets.length,
    })
    return (
        <PageContainer spacing='20px' ref={ref} py='20px' {...rest}>
            {(heading || subhead) && (
                <Stack align='center' spacing='20px'>
                    <Heading as='h2'>{heading}</Heading>
                    <SubHeading>{subhead}</SubHeading>
                </Stack>
            )}
            <Col
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
                        as={animated.div}
                        style={animations[i]}
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

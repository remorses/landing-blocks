import styled from '@emotion/styled'
import { Box, Stack } from 'layout-kit-react'
import React, { ReactNode } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'

export type TestimonialsTweetsProps = {
    heading?: ReactNode
    subheading?: ReactNode
    tweets: string[]
    animate?: any
} & PageContainerProps

export function TestimonialsTweets({
    heading = '',
    subheading = '',
    tweets = [],
    animate = undefined,
    ...rest
}: TestimonialsTweetsProps) {
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
                direction={['column', 'column', 'row']}
                justify='space-evenly'
                align='center'
                minW='100%'
            >
                {tweets.map((id, i) => (
                    <Col
                        mx='40px'
                        my='20px'
                        key={i}
                        minW='260px'
                        // w={['100%', '100%', '320px']}
                    >
                        <Unclickable>
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
                        </Unclickable>
                    </Col>
                ))}
            </Col>
        </PageContainer>
    )
}

const Unclickable = styled.div`
    pointer-events: none;
`

function convertUrlToTweetId(url: string) {
    if (url.startsWith('http')) {
        const path = new URL(url).pathname
        return path.split('/').reverse()[0]
    }
    return url
}

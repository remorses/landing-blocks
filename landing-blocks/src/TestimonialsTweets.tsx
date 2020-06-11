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
            <Stack
                as={Faded}
                // direction={['column', 'column', 'row']}
                direction='row'
                flexWrap='wrap'
                justify='space-evenly'
                align='center'
                minW='100%'
            >
                {tweets.map((id, i) => (
                    <Col
                        m='10px'
                        key={i}
                        minW='260px'
                        shadow='md'
                        borderRadius='lg'
                        overflow='hidden'
                        
                        // w={['100%', '100%', '320px']}
                    >
                        <Unclickable height='calc(fit-content - 20px)'>
                            <TwitterTweetEmbed
                                // style={{paddingBottom: 0, marginBottom: 0}}
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
            </Stack>
        </PageContainer>
    )
}

const Unclickable = styled(Box)`
    pointer-events: none;
    .twitter-tweet {
        margin-bottom: 0px !important;
    }
`

function convertUrlToTweetId(url: string) {
    if (url.startsWith('http')) {
        const path = new URL(url).pathname
        return path.split('/').reverse()[0]
    }
    return url
}

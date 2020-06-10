import { Input, useColorMode } from '@chakra-ui/core'
import { Box, Stack, StackProps } from 'layout-kit-react'
import React, { ReactNode, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Button } from './Button'
import { Col } from './layout'

export type EmailFormProps = {
    cta?: ReactNode
    placeholder?: ReactNode
    animate?: any
    fingerprint?: ReactNode
    value?: string
    onChange?: any
    onSubmit?: any
} & StackProps

export function EmailForm({
    cta = 'Notify me',
    placeholder = 'Enter your email',
    animate = undefined,
    fingerprint = '',
    value = '',
    onChange = console.log,
    onSubmit = console.log,
    ...rest
}: EmailFormProps) {
    const { colorMode } = useColorMode()
    return (
        <Stack
            as='form'
            justify='flex-start'
            width='auto'
            direction={['column', null, 'row']}
            // align='center'
            fontSize='text'
            {...rest}
        >
            <Input
                focusBorderColor='primary'
                onChange={(e) => onChange(e.target.value)}
                value={value}
                shadow='sm'
                bg={
                    {
                        dark: 'rgba(255,255,255, .2)',
                        // light: 'rgba(0,0,0,.03)',
                        light: '#fff',
                    }[colorMode]
                }
                minW='250px'
                minH='40px'
                type='email'
                name='email'
                placeholder={placeholder}
            />
            <Box ml='20px' />
            <Col w={['100%', null, 'auto']}>
                <Button
                    animate={false}
                    onClick={(e) => {
                        e.preventDefault()
                        onSubmit()
                    }}
                    shadow='sm'
                    px='20px'
                    textAlign='center'
                >
                    {cta}
                </Button>
            </Col>
        </Stack>
    )
}

const MessageBox = (props) => {
    return <Box mt='10px' minH='1em' {...props} />
}

export interface MailchimpFormProps extends EmailFormProps {
    /*
    Get the url from the "Audience > Signup Forms > Embedded forms", it looks something like `https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX`
    */
    url: string
}

export function MailchimpForm({ url, ...rest }: MailchimpFormProps) {
    const [email, setEmail] = useState('')
    const { colorMode } = useColorMode()
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <Stack>
                    <EmailForm
                        value={email}
                        onSubmit={() => subscribe({ EMAIL: email })}
                        onChange={setEmail}
                        {...rest}
                    />
                    {status === 'sending' && (
                        <MessageBox
                            color={
                                { light: 'blue.600', dark: 'blue.300' }[
                                    colorMode
                                ]
                            }
                        >
                            sending...
                        </MessageBox>
                    )}
                    {status === 'error' && (
                        <MessageBox
                            color={
                                { light: 'red.500', dark: 'red.300' }[colorMode]
                            }
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    {status === 'success' && (
                        <MessageBox
                            color={
                                { light: 'green.500', dark: 'green.300' }[
                                    colorMode
                                ]
                            }
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                </Stack>
            )}
        />
    )
}

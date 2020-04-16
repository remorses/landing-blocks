import { Box, Button, useColorMode, Flex, Stack } from '@chakra-ui/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Wizard, WizardStepProps } from 'react-multi-steps'

// to test from template http://localhost:3000/new/fromTemplate?githubUrl=https://github.com/remorses/mongoke&dockerComposePath=deploy-docker-compose.yml

const Col = Object.assign(Flex, { defaultProps: { direction: 'column' } })
const Row = Object.assign(Flex, { defaultProps: { direction: 'row' } })

export interface FormValues {}

export const Page = () => {
    const { query } = useRouter()
    console.log({ query })
    // const {result} = usePromise(getTemplate, { cache: true, args: [query] })
    // TODO XXX add the initial values here
    return (
        <Wizard showValuesAsJson={false} Wrapper={Wrapper}>
            <Step0 />
        </Wizard>
    )
}

export const Wrapper: FC<WizardStepProps> = ({ children }) => {
    const { colorMode } = useColorMode()
    return (
        <>
            <Col
                bg='globalBackground'
                maxWidth='100vw'
                height='100vh'
                position='absolute'
                // align='center'
                left='0'
                p={['0', '0', '50px']}
                right='0'
            >
                <Col
                    width='100%'
                    maxW='1000px'
                    minH='84vh'
                    position='relative'
                    mx='auto'
                    height='auto'
                    shadow='0 0 100px rgba(0,0,0,0.1)'
                    p={['20px', '20px', '50px']}
                    // flex='1'
                    borderRadius='20px'
                    bg={{ dark: 'black', light: 'white' }[colorMode]}
                >
                    {/* <Box position='absolute' top='-40px' left='0'>
                        <NextLink href='/new'>
                            <Button> back</Button>
                        </NextLink>
                    </Box> */}
                    {children}
                </Col>
            </Col>
        </>
    )
}

const Step0 = (props: WizardStepProps) => {
    const { query } = useRouter()
    return (
        <Stack>
            <ButtonsBar {...props} />
        </Stack>
    )
}

const ButtonsBar = (props: WizardStepProps) => {
    const { isFirstStep, isLastStep, previous, next } = props
    return (
        <Row justify='space-between' width='100%'>
            {!isFirstStep && (
                <Button mr='20px' variant='link' onClick={previous} flex='1'>
                    previous step
                </Button>
            )}
            <Button onClick={next} color='blue.500' flex='1'>
                next
            </Button>
        </Row>
    )
}

export default Page

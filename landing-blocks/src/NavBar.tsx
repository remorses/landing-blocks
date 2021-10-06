import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

import { useMyColorMode } from './hooks'
import { darkStyles, PageContainer, PageContainerProps, Row } from './layout'

export type NavBarProps = {
    logo: ReactNode
    navs?: ReactNode | ReactNode[]
    navSpacing?: any
} & PageContainerProps

export const NavBar = ({
    logo,
    navSpacing = '26px',
    navs = [],
    ...rest
}: NavBarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useMyColorMode(rest)
    return (
        <PageContainer py='20px' {...rest}>
            <Row>
                <Box alignSelf='flexStart'>{logo}</Box>
                <Box flex='1' />
                <Stack
                    maxW='100%'
                    direction='row'
                    spacing='20px'
                    align='center'
                    display={['none', 'none', 'flex']}
                >
                    {Array.isArray(navs) ? (
                        <Stack
                            align='center'
                            direction='row'
                            spacing={navSpacing}
                        >
                            {navs.map((x, i) => (
                                <Stack
                                    key={i}
                                    fontSize='text'
                                    alignItems='center'
                                    justify='center'
                                    fontWeight='medium'
                                >
                                    {x}
                                </Stack>
                            ))}
                        </Stack>
                    ) : (
                        navs
                    )}
                </Stack>
                <Button
                    display={['block', 'block', 'none']}
                    variant='link'
                    onClick={onOpen}
                >
                    <Box
                        stroke={{ light: 'black', dark: 'white' }[colorMode]}
                        as={Menu}
                        size='36px'
                    />
                </Button>
            </Row>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size='xs'
                // finalFocusRef={btnRef}
            >
                <Box {...(colorMode == 'dark' ? darkStyles : {})}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        {/* <DrawerHeader>Menu</DrawerHeader> */}
                        <Box mt='60px' />
                        <DrawerBody>
                            <Stack
                                maxW='100%'
                                isTruncated
                                spacing='20px'
                                align='center'
                            >
                                {Array.isArray(navs) ? (
                                    <Stack spacing='40px'>
                                        {navs.map((x, i) => (
                                            <Box
                                                key={i}
                                                fontSize='text'
                                                fontWeight='medium'
                                            >
                                                {x}
                                            </Box>
                                        ))}
                                    </Stack>
                                ) : (
                                    navs
                                )}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Box>
            </Drawer>
        </PageContainer>
    )
}

const Menu = (props) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinejoin='round'
            strokeLinecap='round'
            {...props}
        >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
        </svg>
    )
}

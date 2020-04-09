import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/core'
import React, { cloneElement } from 'react'
import { FiMenu as Menu } from 'react-icons/fi'
import { useMyColorMode } from './hooks'
import { darkStyles, PageContainer, Row } from './layout'

export const NavBar = ({ logo, navs, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useMyColorMode(rest)
    return (
        <PageContainer py='20px' {...rest}>
            <Row>
                <Box alignSelf='flexStart'>{logo}</Box>
                <Box flex='1' />
                <Stack
                    maxW='100%'
                    isTruncated
                    direction='row'
                    spacing='20px'
                    align='center'
                    display={['none', 'none', 'flex']}
                >
                    {navs.map((x, i) => (
                        <Box key={i} fontSize='16px' fontWeight='medium'>
                            {cloneElement(x)}
                        </Box>
                    ))}
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
                                {navs.map((x, i) => (
                                    <Box
                                        key={i}
                                        fontSize='16px'
                                        fontWeight='medium'
                                    >
                                        {x}
                                    </Box>
                                ))}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Box>
            </Drawer>
        </PageContainer>
    )
}

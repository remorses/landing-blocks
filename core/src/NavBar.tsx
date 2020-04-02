import { Box, Stack, useDisclosure, useColorMode } from '@chakra-ui/core'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/core'
import React from 'react'
import { Row } from '.'
import { PageContainer } from './layout'
import { FiMenu as Menu } from 'react-icons/fi'

export function NavBar({ logo, navs, ...rest }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {colorMode} = useColorMode()
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
                            {x}
                        </Box>
                    ))}
                </Stack>
                <Button
                    display={['block', 'block', 'none']}
                    variant='link'
                    onClick={onOpen}
                >
                    <Box stroke={{light: 'black', dark: 'white'}[colorMode]} as={Menu} size='40px' />
                </Button>
            </Row>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    {/* <DrawerCloseButton /> */}
                    <DrawerHeader>Menu</DrawerHeader>
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
            </Drawer>
        </PageContainer>
    )
}

import { useColorMode } from "@chakra-ui/core"
import React from "react"
import Color from "color-js"
import {Text} from '@chakra-ui/core'


export const Bullet = (props) => {
    const { colorMode } = useColorMode()
    return (
        <Text
            w='fit-content'
            p='4px'
            px='6px'
            bg={
                {
                    light: Color('black')
                        .setAlpha(0.2)
                        .toCSS(),
                    dark: Color('white')
                        .setAlpha(0.2)
                        .toCSS(),
                }[colorMode]
            }
            fontWeight='medium'
            fontSize='13px'
            borderRadius='4px'
            {...props}
        />
    )
}
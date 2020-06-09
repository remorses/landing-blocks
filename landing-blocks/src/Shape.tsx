import { Box, BoxProps, useColorMode } from '@chakra-ui/core'
import React, { Fragment } from 'react'
import { useColor } from './support'

export type ShapeProps = BoxProps & {
    shape?: 'circle' | 'rect'
    mainColor?: string
}

export function Shape({
    shape = 'circle',
    mainColor = 'gray',
    bg,
    color,
    ...props
}: ShapeProps) {
    
    const {colorMode} = useColorMode()
    const dark = colorMode === 'dark'
    const realColor = useColor(mainColor)
    if (!props.children) {
        return <Fragment />
    }
    if (shape === 'circle') {
        return (
            <Box
                bg={bg ? bg : dark ? `white` : `black`}
                color={color ? color : !dark ? `white` : `black`}
                borderRadius='100%'
                p='1rem'
                {...props}
            />
        )
    }
    return null
}

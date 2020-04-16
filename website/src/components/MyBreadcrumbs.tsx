import NextLink from 'next/link'
import { Image, Link, Stack, Box } from '@chakra-ui/core'
import { NavBar, Footer } from 'react-landing/src'
import { MyLink } from './MyLink'

export function MyBreadcrumbs({ items, ...rest }) {
    return (
        <Stack direction='row' spacing='10px' align='center' {...rest}>
            {items.map((x, i) => (
                <Stack
                    opacity={0.6}
                    fontWeight='medium'
                    direction='row'
                    align='center'
                    spacing='10px'
                >
                    <Box>{x}</Box>
                    {i !== items.length - 1 && <Box>></Box>}
                </Stack>
            ))}
        </Stack>
    )
}

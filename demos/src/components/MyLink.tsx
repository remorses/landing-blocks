import NextLink from 'next/link'
import { Image, Link } from '@chakra-ui/core'
import { NavBar } from 'react-landing/src'
import { useColorMode } from '@chakra-ui/core'
import { useMyColorMode } from 'react-landing/src/hooks'

export function MyLink({ href, ...rest }) {
    const { colorMode } = useMyColorMode(rest)
    return (
        <NextLink href={href}>
            <Link
                color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        </NextLink>
    )
}

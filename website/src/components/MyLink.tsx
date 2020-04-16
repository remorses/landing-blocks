import NextLink from 'next/link'
import { Image, Link } from '@chakra-ui/core'
import { NavBar } from 'landing-blocks/src'
import { useColorMode } from '@chakra-ui/core'
import { useMyColorMode } from 'landing-blocks/src/hooks'

export function MyLink({ href, ...rest }) {
    const { colorMode } = useMyColorMode(rest)
    return (
        <NextLink href={href} passHref>
            <Link
                color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        </NextLink>
    )
}

import NextLink from 'next/link'
import { Image, Link } from '@chakra-ui/core'
import { NavBar } from 'react-landing/src'

export function MyLink({ href, ...rest }) {
    return (
        <NextLink href={href}>
            <Link color='blue.400' {...rest} />
        </NextLink>
    )
}

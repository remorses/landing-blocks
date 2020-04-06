import NextLink from 'next/link'
import { Image, Link } from '@chakra-ui/core'
import { NavBar, Footer } from 'react-landing/src'
import { MyLink } from './MyLink'

export function MyFooter({ ...rest }) {
    return (
        <Footer
            businessName='Reac Landing'
            columns={{
                Developers: [
                    <MyLink href='#'>Components</MyLink>,
                    <MyLink href='#'>Components</MyLink>,
                    <MyLink href='#'>Components</MyLink>,
                ],
                Company: [<MyLink href='#'>Components</MyLink>],
                Product: [<MyLink href='#'>Components</MyLink>],
            }}
            {...rest}
        />
    )
}

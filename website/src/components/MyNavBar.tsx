import NextLink from 'next/link'
import { Image, Link } from '@chakra-ui/core'
import { NavBar } from 'landing-blocks/src'
import { MyLink } from './MyLink'

export function MyNavBar({ ...rest }) {
    return (
        <NavBar
            dark
            bg='#5E629D'
            logo={
                <NextLink href='/'>
                    <Image cursor='pointer' src='/logo.svg' width='200px' />
                </NextLink>
            }
            // logo={
            //     <Stack align='center' direction='row' spacing='20px'>
            //         <Image width='30px' src='/quovery/logo.png' />
            //         <Box fontWeight='medium' fontSize='20px'>
            //             Quovery
            //         </Box>
            //     </Stack>
            // }
            navs={[
                <MyLink href='/#components'>Components</MyLink>,
                <MyLink href='/#demos'>Demos</MyLink>,
                <MyLink href='#'>Newsletter</MyLink>,

                // <Button px='10px'>Sign up</Button>,
            ]}
            {...rest}
        />
    )
}

import { LandingProvider, NavBar, Stack } from 'landing-blocks/src'
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import { BuyDemosButton } from '..'
import { DEMOS_WEBSITE, headingNavLinks } from '../../constants'
import { Spinner } from '@chakra-ui/core'
import { useState } from 'react'

export default function Page({}) {
    const { query } = useRouter()
    const [loaded, setLoaded] = useState(false)
    const name = query.name
    return (
        <LandingProvider
            bg='gray.800'
            pageWidth='100%'
            spacing='0px'
            primary='white'
            p='20px'
            h='100vh'
        >
            <NavBar
                dark
                bg='gray.800'
                m='0px'
                logo={<BuyDemosButton w='auto' />}
                navs={headingNavLinks}
                pb='20px'
                borderBottomWidth='1px'
            />

            <Stack
                mx='10px'
                overflow='hidden'
                borderRadius='lg'
                bg='white'
                h='100%'
                align='flex-start'
            >
                {!name ? (
                    <Stack align='center' justify='center'>
                        <Spinner />
                    </Stack>
                ) : (
                    <Iframe
                        display={loaded ? 'block' : 'none'}
                        url={`${DEMOS_WEBSITE}/demos/${name}`}
                        width='100%'
                        height='100%'
                        onLoad={() => setLoaded(true)}
                        // display='initial'
                        position='relative'
                    />
                )}
            </Stack>
        </LandingProvider>
    )
}

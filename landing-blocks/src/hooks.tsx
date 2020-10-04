import { useColorMode } from '@chakra-ui/core'
import { Faded, FadedProps } from 'baby-i-am-faded'
import React, { ElementType, useMemo } from 'react'

// TODO intersection-observer polyfill
// require('intersection-observer')


export function useFaded({
    animate = undefined,
    triggerOnce = true,
    ...rest
}): { Faded: ElementType } {
    const component = useMemo(() => {
        const defaultProps: FadedProps = {
            cascade: true,
            threshold: 0.1,
            duration: 400,
            triggerOnce,
            children: []
        }
        return (props) => {
            return <Faded {...defaultProps} {...props} />
        }
    }, [animate, triggerOnce])

    return { Faded: animate ? component : 'div' }
}

export function useMyColorMode({ dark = false }) {
    const { colorMode } = useColorMode()
    if (dark) {
        return { colorMode: 'dark' }
    }
    return { colorMode }
}

import { useColorMode } from '@chakra-ui/react'
import { Faded } from 'baby-i-am-faded'
// import { Faded, FadedProps } from 'baby-i-am-faded'
import React, { ComponentType, ElementType, useMemo } from 'react'
import 'intersection-observer'

export function useFaded({
    animate = undefined,
    triggerOnce = true,
    ...rest
}): { Faded: ElementType } {
    const component: ComponentType = useMemo(() => {
        const defaultProps = {
            cascade: true,
            threshold: 0.1,
            duration: 400,
            triggerOnce,
            children: [],
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

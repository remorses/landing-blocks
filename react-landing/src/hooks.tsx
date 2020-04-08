import React from 'react'
require('intersection-observer')

import { useInView } from 'react-intersection-observer'
import { useRef, ElementType } from 'react'
import { useColorMode } from '@chakra-ui/core'
import { Faded, FadedProps } from 'baby-i-am-faded'
import { useMemo } from 'react'
import { Fragment } from 'react'

export function useFaded({
    animate = true,
    triggerOnce = true,
    ...rest
}): { Faded: ElementType } {
    const component = useMemo(() => {
        const defaultProps: FadedProps = {
            cascade: true,
            threshold: 0.3,
            triggerOnce,
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

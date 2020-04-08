import React from 'react'
require('intersection-observer')
import { useTrail, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { useRef, ElementType } from 'react'
import { useColorMode } from '@chakra-ui/core'
import { Faded, FadedProps } from 'baby-i-am-faded'
import { useMemo } from 'react'
import { Fragment } from 'react'

export function useFadeUpAnimation({
    enabled = false,
    number = 4,
    triggerOnce = true,
} = {}) {
    // const [ref, visisble] = useVisible((vi: number) => vi > 0.3)
    const [ref, visible] = useInView({ threshold: 0.3, triggerOnce })
    const animations = useTrail(number, {
        opacity: !enabled || visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(50px)',
        // from: { opacity: 0, transform: 'translateY(100px)' },
        // to: { opacity: 1, transform: 'translateY(0px)' },
        config: config.stiff,
        immediate: !enabled,
    })
    return { ref, animations }
}

export function useFaded({
    enabled = true,
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
    }, [enabled, triggerOnce])

    return { Faded: enabled ? component : 'div' }
}

export function useMyColorMode({ dark = false }) {
    const { colorMode } = useColorMode()
    if (dark) {
        return { colorMode: 'dark' }
    }
    return { colorMode }
}

require('intersection-observer')
import { useTrail, config } from 'react-spring'
// import { useVisible } from 'react-hooks-visible'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

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

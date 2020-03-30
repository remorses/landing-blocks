import { useTrail, config } from 'react-spring'
import { useVisible } from 'react-hooks-visible'

export function useFadeUpAnimation({ enabled = false, number = 1 } = {}) {
    const [ref, visisble] = useVisible((vi: number) => vi > 0.3)
    const animations = useTrail(number, {
        opacity: !enabled || visisble ? 1 : 0,
        transform: visisble ? 'translateY(0px)' : 'translateY(50px)',
        // from: { opacity: 0, transform: 'translateY(100px)' },
        // to: { opacity: 1, transform: 'translateY(0px)' },
        config: config.stiff,
        immediate: !enabled,
    })
    return { ref, animations }
}

import { useColorMode } from '@chakra-ui/react'
import { Faded, FadedProps } from 'baby-i-am-faded'
// import { Faded, FadedProps } from 'baby-i-am-faded'
import React, {
    ComponentType,
    ElementType,
    PropsWithoutRef,
    useMemo,
} from 'react'

export function useFaded({
    animate = undefined,
    triggerOnce = true,
    ...rest
}): { Faded: ElementType } {
    const component: ComponentType = useMemo(() => {
        const defaultProps: FadedProps = {
            cascade: true,
            animationName:
                typeof animate === 'string' ? animate : 'landingBlocksFadeDown',
            threshold: 0.2,
            duration: 400,
            whenInView: true,
            triggerOnce,
            children: [],
            ...(typeof animate === 'object' ? animate : {}),
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

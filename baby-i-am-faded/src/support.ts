/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core'
import React from 'react'

export const cloneElement = (element, props) =>
    jsx(element.type, {
        key: element.key,
        ref: element.ref,
        ...element.props,
        ...props,
    })

export function useCombinedRefs(...refs) {
    const targetRef = React.useRef()

    React.useEffect(() => {
        refs.forEach((ref) => {
            if (!ref) return

            if (typeof ref === 'function') {
                ref(targetRef.current)
            } else {
                ref.current = targetRef.current
            }
        })
    }, [refs])

    return targetRef
}

export const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0px, -20px, 0px);
    }
    to {
        opacity: 1;
        transform: 'none';
    }
`

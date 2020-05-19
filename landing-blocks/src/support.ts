import { useTheme } from '@chakra-ui/core'
import get from 'lodash.get'
import { cloneElement } from 'react'

export function useColor(name): string {
    const theme = useTheme()
    const c = get(theme.colors, name) || name
    return c
}

export function getDisplayName(c) {
    return c.type.displayName || c.type.name
}

export function removeUndefined(c) {
    Object.keys(c).forEach((k) => {
        if (c[k] === undefined) {
            delete c[k]
        }
    })
    return c
}

export function getPageContainerProps(props) {
    const {
        m,
        mt,
        mb,
        ml,
        mr,
        my,
        mx,
        p,
        px,
        py,
        pl,
        pr,
        pt,
        pb,
        spacing,
        floatingElement,
        dark,
        primary,
        pageWidth,
        ...rest
    } = props
    return [
        removeUndefined({
            m,
            mt,
            mb,
            ml,
            mr,
            my,
            mx,
            p,
            px,
            py,
            pl,
            pr,
            pt,
            pb,
            spacing,
            floatingElement,
            dark,
            primary,
            pageWidth,
        }),
        rest,
    ]
}

export function clone(element) {
    if (!element) {
        return element
    }
    if (typeof element === 'string') {
        return element
    }
    if (typeof element === 'number') {
        return element
    }
    return cloneElement(element)
}

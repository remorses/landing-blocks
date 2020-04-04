import { useTheme } from '@chakra-ui/core'
import get from 'lodash.get'

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

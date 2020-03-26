import { useTheme } from '@chakra-ui/core'
import get from 'lodash.get'

export function useColor(name): string {
    const theme = useTheme()
    const c = get(theme.colors, name) || name
    return c
}

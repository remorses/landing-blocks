import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export type PatternBackgroundProps = BoxProps & {
    pattern?: keyof (typeof patterns)
    mainColor?: string
    scatter?: number
}


const patterns = {
    dotsSm: {
        backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)',
        backgroundSize: 'calc(10 * 0.5px) calc(10 * 0.5px)',
    },
    dotsMd: {
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: 'calc(10 * 1px) calc(10 * 1px)',
    },
    dotsLg: {
        backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
        backgroundSize: 'calc(10 * 1.5px) calc(10 * 1.5px)',
    },
    dotsXl: {
        backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
        backgroundSize: 'calc(10 * 2px) calc(10 * 2px)',
    },
    diagonalLinesSm: {
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
        backgroundSize: '10px 10px',
    },
    diagonalLinesMd: {
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
        backgroundSize: '25px 25px',
    },
}

export function PatternBackground({
    pattern = 'dotsMd',
    scatter,
    children,
    ...props
}: PatternBackgroundProps) {
    // const { colorMode } = useColorMode()
    // const dark = colorMode === 'dark'

    return (
        <Box
            transform={`translate(${scatter}px, ${scatter}px)`}
            {...patterns[pattern]}
            {...props}
        >
            <Box transform={`translate(${-scatter}px, ${-scatter}px)`}>
                {children}
            </Box>
            {/* <Box mt={scatter}/>
            <Row ml={scatter}>{children}</Row> */}
        </Box>
    )
}

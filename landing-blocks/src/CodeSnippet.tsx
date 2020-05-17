import { useColorMode, Box, Stack, BoxProps, StackProps } from '@chakra-ui/core'
import React, { ReactNode, Fragment } from 'react'
import Color from 'color-js'
import { Text } from '@chakra-ui/core'
import { PageContainer, PageContainerProps } from './layout'
import Typist from 'react-typist'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { PrismTheme } from 'prism-react-renderer'
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import darkPrismTheme from 'prism-react-renderer/themes/github'

export type CodeSnippetProps = {
    language: Language
    code: string
    isTyping?: boolean
    dark?: boolean
    theme?: PrismTheme
} & StackProps

export const CodeSnippet = ({
    code,
    language,
    isTyping,
    theme = darkPrismTheme,
    dark,
    ...rest
}: CodeSnippetProps) => {
    const lineNoColor = dark ? '#fff' : '#000'
    const bg = dark ? 'black' : 'white'
    const lineNumberW = getLineNoWidth(code)
    
    return (
        <Highlight theme={theme} {...defaultProps} code={code} language={language}>
            {({ className, style: _style, tokens, getLineProps, getTokenProps }) => {
                const {background: _, backgroundColor: __, ...style } = _style
                const lines = tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                        <Box
                            w={lineNumberW}
                            mr='1.5em'
                            color={lineNoColor}
                            as='span'
                            opacity={0.4}
                        >
                            {String(i + 1)}
                        </Box>
                        {line.map((token, key) => (
                            <span
                                key={key}
                                {...getTokenProps({ token, key })}
                            />
                        ))}
                    </div>
                ))
                return (
                    <Box
                        as='pre'
                        bg={bg}
                        minW='300px'
                        minH='200px'
                        className={className}
                        overflow='hidden'
                        borderRadius='10px'
                        p='20px'
                        style={{ ...style }}
                        {...rest}
                    >
                        {isTyping ? <Typist>{lines}</Typist> : lines}
                    </Box>
                )
            }}
        </Highlight>
    )
}

function getLineNoWidth(code) {
    return (
        0.5 + // Start with a base value
        code
            .split(/\r\n|\r|\n/) // Split by newlines
            .length // Get number of lines
            .toString().length * // Get number of digits
            // Reduce by 30%
            0.7
    )
}

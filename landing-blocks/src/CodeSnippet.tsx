import { Box, StackProps } from '@chakra-ui/core'
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer'
import darkPrismTheme from 'prism-react-renderer/themes/duotoneDark'
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import lightPrismTheme from 'prism-react-renderer/themes/duotoneLight'
import React from 'react'
import Typist from 'react-typist'

export type CodeSnippetProps = {
    language: Language
    code: string
    isTyping?: boolean
    dark?: boolean
    theme?: PrismTheme
    lineNumbers?: boolean
} & StackProps

export const CodeSnippet = ({
    code,
    language,
    isTyping,
    lineNumbers,
    theme,
    dark,
    ...rest
}: CodeSnippetProps) => {
    theme = theme ? theme : dark ? darkPrismTheme : lightPrismTheme
    const lineNoColor = dark ? '#fff' : '#000'
    const bg = dark ? 'black' : 'white'
    const lineNumberW = getLineNoWidth(code)

    return (
        <Highlight
            {...defaultProps}
            theme={theme}
            code={code}
            language={language}
        >
            {({
                className,
                style: _style,
                tokens,
                getLineProps,
                getTokenProps,
            }) => {
                const { background: _, backgroundColor: __, ...style } = _style
                const lines = tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                        {lineNumbers ? (
                            <Box
                                w={lineNumberW}
                                mr='1.5em'
                                color={lineNoColor}
                                as='span'
                                opacity={0.4}
                            >
                                {String(i + 1)}
                            </Box>
                        ) : <Box/>}
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

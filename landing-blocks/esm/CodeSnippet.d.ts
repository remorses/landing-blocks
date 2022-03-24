/// <reference types="react" />
import { StackProps } from '@chakra-ui/react';
import { Language, PrismTheme } from 'prism-react-renderer';
export declare type CodeSnippetProps = {
    language: Language;
    code: string;
    isTyping?: boolean;
    dark?: boolean;
    theme?: PrismTheme;
    lineNumbers?: boolean;
} & StackProps;
export declare const CodeSnippet: ({ code, language, isTyping, lineNumbers, theme, dark, ...rest }: CodeSnippetProps) => JSX.Element;
//# sourceMappingURL=CodeSnippet.d.ts.map
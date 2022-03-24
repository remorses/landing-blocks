import { StackProps } from '@chakra-ui/react';
import { FC } from 'react';
export declare const Col: any;
export { Stack, Box } from '@chakra-ui/react';
export { Image } from '@chakra-ui/react';
export declare const Row: any;
export declare const Spacer: ({ x, y }: {
    x?: string;
    y?: string;
}) => JSX.Element;
export declare const darkStyles: {
    color: string;
    borderColor: string;
    placeholder: string;
};
export declare function PropagatedThemeProvider({ theme, children }: {
    theme: any;
    children: any;
}): JSX.Element;
export declare type PageContainerProps = {
    floatingElement?: any;
    dark?: boolean;
    primary?: string;
    pageWidth?: string;
} & StackProps;
export declare const PageContainer: FC<PageContainerProps>;
export declare const FloatingElement: FC<{
    floatingElement: any;
} & StackProps>;
//# sourceMappingURL=layout.d.ts.map
/// <reference types="react" />
import { Theme as ITheme } from '@chakra-ui/react';
import { StackProps } from '@chakra-ui/react';
import { DeepPartial } from 'utility-types';
export interface ThemeExtension extends ITheme {
    space: {
        pagePadding?: any;
    } & ITheme['space'];
    colors: {
        primary: string;
        secondary: string;
        black: string;
        white: string;
    } & ITheme['colors'];
    sizes: {
        pageContainer: any;
    } & ITheme['sizes'];
    fontSizes: {
        text: any;
        heading: any;
        subheading: any;
        subtext: any;
    } & ITheme['fontSizes'];
}
export declare type LandingProviderProps = {
    dark?: boolean;
    primary?: string;
    black?: string;
    white?: string;
    secondary?: string;
    pageWidth?: any;
    pagePadding?: any;
    spacing?: any;
    theme?: DeepPartial<ThemeExtension>;
    children?: any;
} & StackProps;
export declare function LandingProvider({ dark, primary, black, white, secondary, pageWidth, pagePadding, spacing, fontFamily, theme: themeProp, children, ...rest }: LandingProviderProps): JSX.Element;
//# sourceMappingURL=LandingProvider.d.ts.map
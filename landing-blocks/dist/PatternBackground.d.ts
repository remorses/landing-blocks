/// <reference types="react" />
import { BoxProps } from '@chakra-ui/react';
export declare type PatternBackgroundProps = BoxProps & {
    pattern?: keyof (typeof patterns);
    mainColor?: string;
    scatter?: number;
};
declare const patterns: {
    dotsSm: {
        backgroundImage: string;
        backgroundSize: string;
    };
    dotsMd: {
        backgroundImage: string;
        backgroundSize: string;
    };
    dotsLg: {
        backgroundImage: string;
        backgroundSize: string;
    };
    dotsXl: {
        backgroundImage: string;
        backgroundSize: string;
    };
    diagonalLinesSm: {
        backgroundImage: string;
        backgroundSize: string;
    };
    diagonalLinesMd: {
        backgroundImage: string;
        backgroundSize: string;
    };
};
export declare function PatternBackground({ pattern, scatter, children, ...props }: PatternBackgroundProps): JSX.Element;
export {};
//# sourceMappingURL=PatternBackground.d.ts.map
/// <reference types="react" />
import { BoxProps } from '@chakra-ui/react';
export declare type ShapeProps = BoxProps & {
    shape?: 'circle' | 'rect';
    mainColor?: string;
};
export declare function Shape({ shape, mainColor, bg, color, ...props }: ShapeProps): JSX.Element;
//# sourceMappingURL=Shape.d.ts.map
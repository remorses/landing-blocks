/** @jsxRuntime classic */
/** @jsx jsx */
import { ButtonProps as ButtonProps_ } from '@chakra-ui/react';
import { FC } from 'react';
export declare type ButtonProps = ButtonProps_ & {
    href?: string;
    biggerOnHover?: boolean;
    animate?: boolean | keyof typeof myAnimations;
};
declare const myAnimations: any;
export declare const Button: FC<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map
import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type NavBarProps = {
    logo: ReactNode;
    navs?: ReactNode | ReactNode[];
    navSpacing?: any;
} & PageContainerProps;
export declare const NavBar: ({ logo, navSpacing, navs, ...rest }: NavBarProps) => JSX.Element;
//# sourceMappingURL=NavBar.d.ts.map
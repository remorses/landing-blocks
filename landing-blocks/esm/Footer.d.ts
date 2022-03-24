import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type FooterProps = {
    columns: {
        [k: string]: ReactNode[];
    };
    businessName?: string;
} & PageContainerProps;
export declare function Footer({ columns, businessName, ...rest }: FooterProps): JSX.Element;
//# sourceMappingURL=Footer.d.ts.map
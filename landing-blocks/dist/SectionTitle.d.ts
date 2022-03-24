import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type SectionTitleProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    cta?: ReactNode;
    bullet?: ReactNode;
    animate?: any;
} & PageContainerProps;
export declare function SectionTitle({ heading, subheading, bullet, cta, animate, ...rest }: SectionTitleProps): JSX.Element;
//# sourceMappingURL=SectionTitle.d.ts.map
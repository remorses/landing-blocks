import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type FeatureProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    image?: ReactNode;
    cta?: ReactNode;
    bullet?: ReactNode;
    flip?: boolean;
    animate?: any;
} & PageContainerProps;
export declare function Feature({ heading, subheading, bullet, image, flip, cta, animate, direction, ...rest }: FeatureProps): JSX.Element;
//# sourceMappingURL=Feature.d.ts.map
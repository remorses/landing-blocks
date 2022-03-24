import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type BannerProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    bullet?: ReactNode;
    image?: ReactNode;
    cta?: ReactNode;
    flip?: boolean;
    fingerprint?: ReactNode;
    animate?: any;
} & PageContainerProps;
export declare function Banner({ heading, subheading, bullet, cta, image, flip, fingerprint, animate, ...props }: BannerProps): JSX.Element;
//# sourceMappingURL=Banner.d.ts.map
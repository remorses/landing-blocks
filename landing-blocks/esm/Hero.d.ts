import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type HeroProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    cta?: ReactNode;
    image?: ReactNode;
    bullet?: ReactNode;
    fingerprint?: ReactNode;
    animate?: any;
} & PageContainerProps;
export declare function Hero({ heading, subheading, cta, image, bullet, fingerprint, animate, ...rest }: HeroProps): JSX.Element;
//# sourceMappingURL=Hero.d.ts.map
import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type TopBannerProps = {
    heading?: ReactNode;
    cta?: ReactNode;
    bullet?: ReactNode;
} & PageContainerProps;
export declare function TopBanner({ heading, cta, bullet, ...rest }: TopBannerProps): JSX.Element;
//# sourceMappingURL=TopBanner.d.ts.map
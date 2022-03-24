import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type PricingProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    animate?: boolean;
    features: string[];
    prices: PriceColumnType[];
} & PageContainerProps;
export interface PriceColumnType {
    background?: string;
    heading?: ReactNode;
    subheading?: ReactNode;
    cta?: ReactNode;
    features: ReactNode[];
    price: string;
}
export declare function Pricing({ heading, subheading, features, prices, animate, ...rest }: PricingProps): JSX.Element;
//# sourceMappingURL=Pricing.d.ts.map
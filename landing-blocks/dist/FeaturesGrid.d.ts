import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type FeaturesGridProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    centerText?: boolean;
    features: {
        heading?: ReactNode;
        subheading?: ReactNode;
        icon?: ReactNode;
    }[];
    animate?: any;
} & PageContainerProps;
export declare function FeaturesGrid({ heading, subheading, features, centerText, animate, ...rest }: FeaturesGridProps): JSX.Element;
//# sourceMappingURL=FeaturesGrid.d.ts.map
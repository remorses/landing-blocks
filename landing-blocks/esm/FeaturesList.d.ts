import { StackProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type FeaturesListProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    centerText?: boolean;
    features: FeatureProps[];
    animate?: any;
} & PageContainerProps;
declare type FeatureProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    icon?: ReactNode;
    centerText?: boolean;
} & StackProps;
export declare function FeaturesList({ heading, subheading, features, centerText, animate, ...rest }: FeaturesListProps): JSX.Element;
export {};
//# sourceMappingURL=FeaturesList.d.ts.map
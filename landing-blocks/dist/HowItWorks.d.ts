import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type HowItWorksProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    steps: StepProps[];
    animate?: any;
} & PageContainerProps;
export declare type StepProps = {
    heading?: ReactNode;
    decorativeHeading?: ReactNode;
    subheading?: ReactNode;
    image?: ReactNode;
    animate?: any;
};
export declare function HowItWorks({ heading, subheading, steps, animate, ...rest }: HowItWorksProps): JSX.Element;
//# sourceMappingURL=HowItWorks.d.ts.map
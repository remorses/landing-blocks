import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type FaqsProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    faqs: {
        question: ReactNode;
        answer: ReactNode;
    }[];
    animate?: any;
} & PageContainerProps;
export declare function Faqs({ heading, subheading, faqs, animate, ...rest }: FaqsProps): JSX.Element;
//# sourceMappingURL=Faqs.d.ts.map
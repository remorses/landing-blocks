import { ReactNode } from 'react';
import { PageContainerProps } from './layout';
export declare type CountdownProps = {
    heading?: ReactNode;
    subheading?: ReactNode;
    cta?: ReactNode;
    bullet?: ReactNode;
    deadline: Date;
    animate?: any;
} & PageContainerProps;
export declare function Countdown({ heading, subheading, deadline, bullet, cta, animate, ...rest }: CountdownProps): JSX.Element;
//# sourceMappingURL=Countdown.d.ts.map
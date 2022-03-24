import { StackProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
export declare type EmailFormProps = {
    cta?: ReactNode;
    placeholder?: ReactNode;
    animate?: any;
    fingerprint?: ReactNode;
    value?: string;
    onChange?: any;
    onSubmit?: any;
} & StackProps;
export declare function EmailForm({ cta, placeholder, animate, fingerprint, value, onChange, onSubmit, ...rest }: EmailFormProps): JSX.Element;
export interface MailchimpFormProps extends EmailFormProps {
    url: string;
}
export declare function MailchimpForm({ url, ...rest }: MailchimpFormProps): JSX.Element;
//# sourceMappingURL=EmailForm.d.ts.map
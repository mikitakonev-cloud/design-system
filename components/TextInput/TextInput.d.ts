import { default as React } from '../../../node_modules/react';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    helperText?: string;
    error?: string;
    onChange?: (value: string) => void;
    className?: string;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;

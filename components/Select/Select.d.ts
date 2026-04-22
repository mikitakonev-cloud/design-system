import { default as React } from '../../../node_modules/react';

export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps {
    options: SelectOption[];
    value?: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    className?: string;
}
export declare const Select: React.FC<SelectProps>;

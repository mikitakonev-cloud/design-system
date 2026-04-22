import { default as React } from '../../../node_modules/react';

export interface CheckboxProps {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    label?: string;
    helperText?: string;
    onChange?: (checked: boolean) => void;
    className?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;

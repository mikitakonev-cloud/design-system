import { default as React } from '../../../node_modules/react';

export interface RadioButtonProps {
    selected?: boolean;
    disabled?: boolean;
    label?: string;
    helperText?: string;
    value?: string;
    name?: string;
    onChange?: (value: string) => void;
    className?: string;
}
export declare const RadioButton: React.FC<RadioButtonProps>;

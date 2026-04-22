import { default as React } from '../../../node_modules/react';

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
    value?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
    className?: string;
}
export declare const Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>>;

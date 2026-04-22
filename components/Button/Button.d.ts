import { default as React } from '../../../node_modules/react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'M' | 'L';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

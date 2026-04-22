import React from 'react';
import styles from './Button.module.css';

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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'M',
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const variantClass = styles[variant];
    const sizeClass = size === 'L' ? styles.sizeL : styles.sizeM;

    return (
      <button
        ref={ref}
        className={[
          styles.button,
          variantClass,
          sizeClass,
          loading ? styles.loading : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          iconLeft && <span className={styles.icon}>{iconLeft}</span>
        )}
        {children}
        {!loading && iconRight && (
          <span className={styles.icon}>{iconRight}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

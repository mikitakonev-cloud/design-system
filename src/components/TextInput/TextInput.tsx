import React, { useId } from 'react';
import styles from './TextInput.module.css';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  helperText?: string;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, helperText, error, onChange, className, disabled, ...props }, ref) => {
    const id = useId();

    return (
      <div className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          <input
            id={id}
            ref={ref}
            className={[styles.input, error ? styles.error : ''].filter(Boolean).join(' ')}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            {...props}
          />
        </div>
        {error && <span className={styles.errorText}>{error}</span>}
        {!error && helperText && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

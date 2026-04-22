import React, { useId } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  helperText,
  onChange,
  className,
}) => {
  const id = useId();

  const boxClass = [
    styles.box,
    checked ? styles.checked : '',
    indeterminate ? styles.indeterminate : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label
      className={[styles.wrapper, disabled ? styles.disabled : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate;
        }}
      />
      <span className={boxClass} aria-hidden="true">
        {indeterminate ? (
          <svg className={styles.checkIcon} width="10" height="2" viewBox="0 0 10 2" fill="none">
            <path d="M1 1h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className={styles.checkIcon} width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path
              d="M1 3.5L3.5 6L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {(label || helperText) && (
        <span className={styles.textStack}>
          {label && <span className={styles.label}>{label}</span>}
          {helperText && <span className={styles.helperText}>{helperText}</span>}
        </span>
      )}
    </label>
  );
};

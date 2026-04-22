import React, { useId } from 'react';
import styles from './RadioButton.module.css';

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

export const RadioButton: React.FC<RadioButtonProps> = ({
  selected = false,
  disabled = false,
  label,
  helperText,
  value = '',
  name,
  onChange,
  className,
}) => {
  const id = useId();

  return (
    <label
      className={[styles.wrapper, disabled ? styles.disabled : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      htmlFor={id}
    >
      <input
        id={id}
        type="radio"
        className={styles.input}
        checked={selected}
        disabled={disabled}
        value={value}
        name={name}
        onChange={() => onChange?.(value)}
      />
      <span className={[styles.ring, selected ? styles.selected : ''].filter(Boolean).join(' ')} aria-hidden="true">
        <span className={styles.dot} />
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

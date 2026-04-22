import React, { useId, useRef, useState, useEffect } from 'react';
import styles from './Select.module.css';

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

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  label,
  helperText,
  disabled = false,
  onChange,
  className,
}) => {
  const id = useId();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (optValue: string) => {
    onChange?.(optValue);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <div ref={wrapperRef} className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <button
        id={id}
        type="button"
        className={[styles.trigger, open ? styles.open : ''].filter(Boolean).join(' ')}
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? '' : styles.placeholder}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={[styles.chevron, open ? styles.open : ''].filter(Boolean).join(' ')}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdown} role="listbox">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              className={[styles.option, opt.value === value ? styles.selected : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

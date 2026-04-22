import React from 'react';
import styles from './Search.module.css';

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ value, onChange, onClear, placeholder = 'Search...', disabled, className, ...props }, ref) => {
    const showClear = Boolean(value) && !disabled;

    return (
      <div className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}>
        <span className={styles.icon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <input
          ref={ref}
          type="text"
          role="searchbox"
          className={[styles.input, showClear ? styles.hasClear : ''].filter(Boolean).join(' ')}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
        {showClear && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={onClear}
            aria-label="Clear search"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

Search.displayName = 'Search';

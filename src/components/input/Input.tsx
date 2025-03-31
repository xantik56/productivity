import { useId } from 'react';
import cn from 'clsx';

import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'email' | 'password';
  id?: string;
  autoComplete?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  error?: string;
  invalid?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  contentRight?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export function Input({
  type = 'text',
  id,
  autoComplete,
  autoFocus,
  label,
  placeholder,
  value,
  name,
  disabled,
  invalid,
  error,
  className,
  style,
  onChange,
  onFocus
}: InputProps) {
  const _id = useId();
  const inputId = id ?? _id;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn(styles.root, className)} style={style}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <input
          type={type}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          id={inputId}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-describedby={errorId}
          value={value}
          name={name}
          disabled={disabled}
          className={cn(styles.input, invalid && styles.invalid)}
          style={style}
          onChange={onChange}
          onFocus={onFocus}
        />
        {error && (
          <p id={errorId} className={styles.errorMessage}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

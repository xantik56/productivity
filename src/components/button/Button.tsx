import React from 'react';

import cn from 'clsx';

import styles from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ type = 'button', children, className, style, onClick, disabled, isLoading }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(styles.root, isLoading && styles.loading, className)}
      style={style}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className={styles.spinner} aria-label="loading"></span>
           Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

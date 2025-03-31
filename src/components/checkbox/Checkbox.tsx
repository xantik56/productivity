
import { useId } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  label?: string;
  defaultChecked?: boolean;
}

export function Checkbox({ label, defaultChecked }: CheckboxProps) {
  const id = useId();

  return (
    <div className={styles.root}>
      <input type="checkbox" defaultChecked={defaultChecked} className={styles.input} id={id} />
      <label className={styles.label} htmlFor={id}>{label}</label>
    </div>
  );
}

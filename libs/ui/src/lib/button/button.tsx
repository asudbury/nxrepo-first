import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>My UI Button!</h1>
    </div>
  );
}

export default Button;

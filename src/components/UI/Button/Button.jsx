import styles from './Button.module.scss';

const Button = ({ children, cb }) => {
  return (
    <button className={styles.button} onClick={cb}>
      {children}
    </button>
  )
}

export default Button;
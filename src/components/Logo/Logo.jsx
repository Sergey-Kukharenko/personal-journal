import styles from './Logo.module.css';
import { memo } from 'react';

function Logo() {
  return <img className={styles.logo} src='/logo.svg' alt='logo' />;
}

export default memo(Logo);

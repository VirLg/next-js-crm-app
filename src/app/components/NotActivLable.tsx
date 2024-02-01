import React from 'react';
import styles from './NotActivLable.module.css';
export interface NotActivLableProps {
  children: React.ReactNode;
}
export default function NotActivLable({ children }: NotActivLableProps) {
  return <span className={styles.lable}>{children}</span>;
}

import React from 'react';
import styles from './ActivLable.module.css';
export interface ActivLableProps {
  children: React.ReactNode;
}
export default function ActivLable({ children }: ActivLableProps) {
  return <span className={styles.lable}>{children}</span>;
}

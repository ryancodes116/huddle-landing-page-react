import React from 'react';
import styles from '../styles/FooterLinks.module.css';

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <ul className={styles.list}>
        <li className={styles.listItem}>About Us</li>
        <li className={styles.listItem}>What We Do</li>
        <li className={styles.listItem}>FAQ</li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.listItem}>Career</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem}>Contact Us</li>
      </ul>
    </div>
  );
};

export default FooterLinks;

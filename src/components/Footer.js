import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import Contact from '../components/Contact';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import Contact from '../components/Contact';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <Contact />
        <FooterLinks />
        <small className={styles.copyright}>
          © Copyright 2020 Huddle. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

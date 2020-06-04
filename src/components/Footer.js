import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import logo from '../images/logo.svg';
import Contact from '../components/Contact';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={classNames('container', styles.logo)}>
          <img src={logo} alt="Huddle logo" />
        </div>

        <div className={classNames('container', styles.footerContent)}>
          <Contact />
          <FooterLinks />
        </div>

        <div className={styles.copyright}>
          <small>© Copyright 2020 Huddle. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

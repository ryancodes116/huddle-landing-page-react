import React from 'react';
import styles from '../styles/Contact.module.css';
import logo from '../images/logo.svg';
import location from '../images/icon-location.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';

const Contact = () => {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Huddle logo" />
      <div className={styles.contactMethod}>
        <img
          className={styles.icon}
          style={{ width: '2.5rem', marginRight: '2.7rem' }}
          src={location}
          alt="location icon"
        />
        <p className={styles.contactText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className={styles.contactMethod}>
        <img className={styles.icon} src={phone} alt="phone icon" />
        <p className={styles.contactText}>+1-543-123-4567</p>
      </div>
      <div className={styles.contactMethod}>
        <img className={styles.icon} src={email} alt="email icon" />
        <p className={styles.contactText}>example@fylo.com</p>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Huddle logo" />
      </div>
      <button className={styles.navBtn}>Try It Free</button>
    </nav>
  );
};

export default Navbar;

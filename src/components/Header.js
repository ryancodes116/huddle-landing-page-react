import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Header.module.css';
import Navbar from './Navbar';
import headerImg from '../images/illustration-mockups.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>
              Build The Community Your Fans Will Love
            </h1>
            <p className={styles.text}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className={classNames('btn', styles.headerBtn)}>
              Get Started For Free
            </button>
          </div>
          <div className={styles.headerImage}>
            <img src={headerImg} alt="Huddle mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Card.module.css';

const Card = ({ flexDirection, imageSrc, imageAlt, title, text }) => {
  return (
    <div className={styles.card} style={{ flexDirection: flexDirection }}>
      <div className={classNames('container', styles.cardContent)}>
        <img className={styles.img} src={imageSrc} alt={imageAlt} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Card;

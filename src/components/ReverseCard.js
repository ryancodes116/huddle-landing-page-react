import React from 'react';
import classNames from 'classnames';
import styles from '../styles/ReverseCard.module.css';

const ReverseCard = ({ imageSrc, imageAlt, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={classNames('container', styles.cardContent)}>
        <img className={styles.img} src={imageSrc} alt={imageAlt} />
        <div className={styles.cardText}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReverseCard;

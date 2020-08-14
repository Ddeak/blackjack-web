import React from 'react';

import styles from './Card.module.scss';

type PropsType = {
  message: string;
};

const CustomCard = ({ message }: PropsType) => {
  return (
    <div className={styles.card}>
      <p>{message}</p>
    </div>
  );
};

export default CustomCard;

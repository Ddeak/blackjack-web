import React from 'react';

import styles from './Card.module.scss';

type PropsType = {
  message: string;
};

const CustomCard = ({ message }: PropsType) => {
  return (
    <div className={`${styles.card} ${styles.greyBorder}`}>
      <p>{message}</p>
    </div>
  );
};

export default CustomCard;

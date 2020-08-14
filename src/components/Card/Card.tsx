import React from 'react';

import styles from './Card.module.scss';
import { Card } from '../../types/card';

type PropsType = {
  card: Card;
};

const CardView = ({ card }: PropsType) => {
  return (
    <div className={styles.card}>
      <p>{card.suit}</p>
      <p>{card.name}</p>
    </div>
  );
};

export default CardView;

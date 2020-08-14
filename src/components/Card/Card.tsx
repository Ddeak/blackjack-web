import React from 'react';

import styles from './Card.module.scss';
import { Card } from '../../types/card';
import { SUITS } from '../../constants/card';

type PropsType = {
  card: Card;
};

const CardView = ({ card }: PropsType) => {
  const cardColour =
    card.suit === SUITS.CLUBS || card.suit === SUITS.SPADES
      ? styles.blackBorder
      : styles.redBorder;

  return (
    <div className={`${styles.card} ${cardColour}`}>
      <p>{card.suit}</p>
      <p>{card.name}</p>
    </div>
  );
};

export default CardView;

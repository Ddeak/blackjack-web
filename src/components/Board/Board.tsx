import React from 'react';

import styles from './Board.module.scss';

import { PlayerField, DealerField } from '../Fields';

const Board = () => {
  return (
    <div className={styles.container}>
      <h1>Blackjack Board</h1>
      <DealerField />
      <PlayerField />
    </div>
  );
};

export default Board;

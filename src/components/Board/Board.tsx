import React from 'react';

import styles from './Board.module.scss';

import { PlayerField, DealerField } from '../Fields';
import ActionBar from '../ActionBar';
import DeckRow from '../DeckRow';

const Board = () => {
  return (
    <div className={styles.container}>
      <h1>Blackjack Board</h1>
      <DeckRow />
      <DealerField />
      <PlayerField />
      <ActionBar />
    </div>
  );
};

export default Board;

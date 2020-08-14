import React from 'react';

import styles from './Deck.module.scss';
import Deck from './Deck';

const DeckRow = () => {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  );
};

export default DeckRow;

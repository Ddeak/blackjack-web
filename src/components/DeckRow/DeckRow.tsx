import React from 'react';

import styles from './Deck.module.scss';

import { CustomCard } from '../Card';

const DeckRow = () => {
  return (
    <div className={styles.container}>
      <CustomCard message="Deck" />
    </div>
  );
};

export default DeckRow;

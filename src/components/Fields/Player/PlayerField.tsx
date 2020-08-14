import React from 'react';
import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card as CardView } from '../../Card';
import { RootState } from '../../../state/store';

const PlayerField = () => {
  const { playerCards } = useSelector((state: RootState) => state.game);

  return (
    <Field>
      <p>Player Cards:</p>
      <div className={styles.cardRow}>
        {playerCards.map((card) => (
          <CardView key={`${card.name} ${card.suit}`} card={card} />
        ))}
      </div>
    </Field>
  );
};

export default PlayerField;

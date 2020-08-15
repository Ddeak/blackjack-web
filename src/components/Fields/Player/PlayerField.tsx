import React from 'react';
import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card as CardView } from '../../Card';
import { RootState } from '../../../state/store';
import { getPlayerDisplayScore } from '../../../state/selectors/game';

const PlayerField = () => {
  const { playerCards } = useSelector((state: RootState) => state.game);
  const playerScore = useSelector(getPlayerDisplayScore);

  return (
    <Field>
      <div className={styles.detailsRow}>
        <h5>Player Cards:</h5>
        <h5>Player Score: {playerScore}</h5>
      </div>

      <div className={styles.cardRow}>
        {playerCards.map((card) => (
          <CardView key={`${card.name} ${card.suit}`} card={card} />
        ))}
      </div>
    </Field>
  );
};

export default PlayerField;

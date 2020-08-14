import React from 'react';

import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card as CardView, CustomCard } from '../../Card';
import { RootState } from '../../../state/store';
import { getDealerScores } from '../../../state/selectors/game';
import GAME_STATE from '../../../constants/game';

const DealerField = () => {
  const { dealerCards, currentState } = useSelector(
    (state: RootState) => state.game
  );
  const dealerScore = useSelector(getDealerScores);
  const isDealersTurn = currentState === GAME_STATE.DealerTurn;

  return (
    <Field>
      <div className={styles.dealerDetailsRow}>
        <p>Dealer Cards:</p>
        <p>Dealer Score: {dealerScore[0]}</p>
      </div>

      <div className={styles.cardRow}>
        {dealerCards.map((card, index) =>
          index === 0 && !isDealersTurn ? (
            <CustomCard key="dealerCard" message="Hidden" />
          ) : (
            <CardView key={`${card.name} ${card.suit}`} card={card} />
          )
        )}
      </div>
    </Field>
  );
};

export default DealerField;

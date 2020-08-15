import React from 'react';

import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card as CardView, CustomCard } from '../../Card';
import { RootState } from '../../../state/store';
import {
  getDealerDisplayScore,
  hideDealerCardSelector,
} from '../../../state/selectors/game';

const DealerField = () => {
  const { dealerCards } = useSelector((state: RootState) => state.game);
  const dealerScore = useSelector(getDealerDisplayScore);
  const hideDealerCard = useSelector(hideDealerCardSelector);

  return (
    <Field>
      <div className={styles.detailsRow}>
        <h5>Dealer Cards:</h5>
        <h5>Dealer Score: {dealerScore}</h5>
      </div>

      <div className={styles.cardRow}>
        {dealerCards.map((card, index) =>
          index === 0 && hideDealerCard ? (
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

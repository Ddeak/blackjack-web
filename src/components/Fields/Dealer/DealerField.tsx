import React from 'react';

import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card as CardView, CustomCard } from '../../Card';
import { RootState } from '../../../state/store';

const DealerField = () => {
  const { dealerCards } = useSelector((state: RootState) => state.game);

  return (
    <Field>
      <p>Dealer Cards:</p>
      <div className={styles.cardRow}>
        {dealerCards.map((card, index) =>
          index === 0 ? (
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

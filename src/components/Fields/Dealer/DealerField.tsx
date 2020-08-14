import React from 'react';

import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card } from '../../../types/card';
import { Card as CardView, CustomCard } from '../../Card';
import { RootState } from '../../../state/store';

const DealerField = () => {
  const { dealerCards } = useSelector((state: RootState) => state.game);

  return <DealerFieldView cards={dealerCards} />;
};

type PropsType = {
  cards: Card[];
};

const DealerFieldView = ({ cards }: PropsType) => {
  return (
    <Field>
      <p>Dealer Cards:</p>
      <div className={styles.cardRow}>
        {cards.map((card, index) =>
          index === 0 ? (
            <CustomCard message="Hidden" />
          ) : (
            <CardView card={card} />
          )
        )}
      </div>
    </Field>
  );
};

export default DealerField;

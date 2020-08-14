import React from 'react';
import { useSelector } from 'react-redux';

import styles from '../Fields.module.scss';
import Field from '../Field';
import { Card } from '../../../types/card';
import { Card as CardView } from '../../Card';
import { RootState } from '../../../state/store';

const PlayerField = () => {
  const { playerCards } = useSelector((state: RootState) => state.game);

  return <PlayerFieldView cards={playerCards} />;
};

type PropsType = {
  cards: Card[];
};

const PlayerFieldView = ({ cards }: PropsType) => {
  return (
    <Field>
      <p>Player Cards:</p>
      <div className={styles.cardRow}>
        {cards.map((card) => (
          <CardView card={card} />
        ))}
      </div>
    </Field>
  );
};

export default PlayerField;

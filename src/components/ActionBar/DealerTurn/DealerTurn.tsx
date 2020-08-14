import React from 'react';
import { useSelector } from 'react-redux';

import { getPlayerScores } from '../../../state/selectors/game';
import styles from '../Actionbar.module.scss';

const DealerTurn = () => {
  const scores = useSelector(getPlayerScores);
  const playerScore = scores[1] > 0 ? scores[1] : scores[0];

  return (
    <div className={styles.container}>
      <p>Dealer&apos;s turn</p>
      <p>Your score is: {playerScore}</p>
    </div>
  );
};

export default DealerTurn;

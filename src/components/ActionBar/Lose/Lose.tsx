import React from 'react';

import styles from '../Actionbar.module.scss';
import { MAX_SCORE } from '../../../constants/game';

const Lose = () => {
  return (
    <div className={styles.container}>
      <h3>Oops! You went over {MAX_SCORE}!</h3>
      <button type="button">Play again?</button>
    </div>
  );
};

export default Lose;

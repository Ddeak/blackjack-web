import React from 'react';

import styles from '../Actionbar.module.scss';

const Lose = () => {
  return (
    <div className={styles.container}>
      <h3>You lose!</h3>
      <button type="button">Play again?</button>
    </div>
  );
};

export default Lose;

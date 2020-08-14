import React from 'react';

import styles from '../Actionbar.module.scss';

const DealerTurn = () => {
  return (
    <div className={styles.container}>
      <p>Dealer&apos;s turn</p>
      <p>Your score is: 21</p>
    </div>
  );
};

export default DealerTurn;

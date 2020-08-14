import React from 'react';

import styles from './Actionbar.module.scss';

const InvalidGameActions = () => {
  return (
    <div className={styles.container}>
      <h3>The game is in an invalid state. Please refresh or click here.</h3>
    </div>
  );
};

export default InvalidGameActions;

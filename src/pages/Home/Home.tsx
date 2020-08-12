import React from 'react';

import styles from './Home.module.scss';
import Board from '../../components/Board';

const Home = () => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
};

export default Home;

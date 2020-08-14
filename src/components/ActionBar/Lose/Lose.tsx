import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { resetGame } from '../../../state/actions/game';

const Lose = () => {
  const dispatch = useDispatch();
  const onPlayAgainClick = () => dispatch(resetGame());

  return (
    <div className={styles.container}>
      <h3>You lose!</h3>
      <button type="button" onClick={onPlayAgainClick}>
        Play again?
      </button>
    </div>
  );
};

export default Lose;

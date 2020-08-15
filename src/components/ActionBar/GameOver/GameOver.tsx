import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { resetGame } from '../../../state/actions/game';

const GameOver = ({ message }: { message: string }) => {
  const dispatch = useDispatch();
  const onPlayAgainClick = () => dispatch(resetGame());

  return (
    <div className={styles.container}>
      <h3>{message}</h3>
      <button id="reset" type="button" onClick={onPlayAgainClick}>
        Play again?
      </button>
    </div>
  );
};

export const PlayerLose = () => {
  return <GameOver message="You lose!" />;
};

export const PlayerWin = () => {
  return <GameOver message="Congratulations! You win!" />;
};

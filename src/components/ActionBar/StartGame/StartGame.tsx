import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { updateGameState } from '../../../state/actions/game';
import GAME_STATE from '../../../constants/game';

const StartGameActions = () => {
  const dispatch = useDispatch();

  const onStartClick = () => dispatch(updateGameState(GAME_STATE.Starting));

  return (
    <div className={styles.container}>
      <h3>Press the button to start the game!</h3>
      <button type="button" onClick={onStartClick}>
        Start
      </button>
    </div>
  );
};

export default StartGameActions;

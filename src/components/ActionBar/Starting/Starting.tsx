import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import {
  updateGameState,
  addPlayerCard,
  addDealerCard,
} from '../../../state/actions/game';
import GAME_STATE from '../../../constants/game';

const Starting = () => {
  const dispatch = useDispatch();

  // VERY crude method to deal cards at the start.
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(addPlayerCard());
    }, 1000);

    setTimeout(() => {
      dispatch(addDealerCard());
    }, 2000);

    setTimeout(() => {
      dispatch(addPlayerCard());
    }, 3000);

    setTimeout(() => {
      dispatch(addDealerCard());
    }, 4000);

    setTimeout(() => {
      dispatch(updateGameState(GAME_STATE.PlayerTurn));
    }, 5000);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h3>Starting...</h3>
    </div>
  );
};

export default Starting;

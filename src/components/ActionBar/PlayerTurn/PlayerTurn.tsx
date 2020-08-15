import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { getPlayerDisplayScore } from '../../../state/selectors/game';
import { addPlayerCard, updateGameState } from '../../../state/actions/game';
import GAME_STATE from '../../../constants/game';

const PlayerTurn = () => {
  const dispatch = useDispatch();
  const playerScore = useSelector(getPlayerDisplayScore);

  const onPlayerHit = () => dispatch(addPlayerCard());
  const onPlayerStick = () => dispatch(updateGameState(GAME_STATE.DealerTurn));

  return (
    <PlayerTurnView
      playerScore={playerScore}
      onHit={onPlayerHit}
      onStick={onPlayerStick}
    />
  );
};

type PropsType = {
  playerScore: string;
  onHit: () => void;
  onStick: () => void;
};

const PlayerTurnView = ({ playerScore, onHit, onStick }: PropsType) => {
  return (
    <div className={styles.container}>
      <h3>Your score is: {playerScore}</h3>

      <div className={styles.playerButtons}>
        <button type="button" onClick={onHit}>
          Hit
        </button>
        <button type="button" onClick={onStick}>
          Stick
        </button>
      </div>
    </div>
  );
};

export default PlayerTurn;

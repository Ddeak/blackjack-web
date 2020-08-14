import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { getPlayerScores } from '../../../state/selectors/game';
import { addPlayerCard } from '../../../state/actions/game';

const PlayerTurn = () => {
  const dispatch = useDispatch();
  const playerScore = useSelector(getPlayerScores);

  const onPlayerHit = () => dispatch(addPlayerCard());
  const onPlayerStay = () => {};

  return (
    <PlayerTurnView
      playerScore={playerScore}
      onHit={onPlayerHit}
      onStay={onPlayerStay}
    />
  );
};

type PropsType = {
  playerScore: [number, number];
  onHit: () => void;
  onStay: () => void;
};

const PlayerTurnView = ({ playerScore, onHit, onStay }: PropsType) => {
  let scoreDisplay = `${playerScore[0]}`;
  if (playerScore[1] > 0) scoreDisplay += ` or ${playerScore[1]}`;

  return (
    <div className={styles.container}>
      <h3>Your score is: {scoreDisplay}</h3>

      <div className={styles.playerButtons}>
        <button type="button" onClick={onHit}>
          Hit
        </button>
        <button type="button" onClick={onStay}>
          Stand
        </button>
      </div>
    </div>
  );
};

export default PlayerTurn;

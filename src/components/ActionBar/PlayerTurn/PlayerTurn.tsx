import React from 'react';

import styles from '../Actionbar.module.scss';

const PlayerTurn = () => {
  const playerScore = 0;

  const onPlayerHit = () => {};
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
  playerScore: number;
  onHit: () => void;
  onStay: () => void;
};

const PlayerTurnView = ({ playerScore, onHit, onStay }: PropsType) => {
  return (
    <div className={styles.container}>
      <h3>Your score is: {playerScore}</h3>

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

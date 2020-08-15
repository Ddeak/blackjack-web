import React from 'react';

import styles from '../Actionbar.module.scss';

type PropsType = {
  playerScore: string;
  onHit: () => void;
  onStick: () => void;
  preventPlayerHit: boolean;
};

const PlayerTurnView = ({
  playerScore,
  onHit,
  onStick,
  preventPlayerHit,
}: PropsType) => {
  return (
    <div className={styles.container}>
      <h3>Your score is: {playerScore}</h3>

      <div className={styles.playerButtons}>
        <button disabled={preventPlayerHit} type="button" onClick={onHit}>
          Hit
        </button>
        <button type="button" onClick={onStick}>
          Stick
        </button>
      </div>
    </div>
  );
};

export default PlayerTurnView;

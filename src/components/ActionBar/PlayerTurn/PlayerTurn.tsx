import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getPlayerDisplayScore,
  preventPlayerHitSelector,
} from '../../../state/selectors/game';
import { addPlayerCard, updateGameState } from '../../../state/actions/game';
import GAME_STATE from '../../../constants/game';

import PlayerTurnView from './PlayerTurnView';

const PlayerTurn = () => {
  const dispatch = useDispatch();
  const playerScore = useSelector(getPlayerDisplayScore);
  const preventPlayerHit = useSelector(preventPlayerHitSelector);

  const onPlayerHit = () => dispatch(addPlayerCard());
  const onPlayerStick = () => dispatch(updateGameState(GAME_STATE.DealerTurn));

  return (
    <PlayerTurnView
      playerScore={playerScore}
      onHit={onPlayerHit}
      onStick={onPlayerStick}
      preventPlayerHit={preventPlayerHit}
    />
  );
};

export default PlayerTurn;

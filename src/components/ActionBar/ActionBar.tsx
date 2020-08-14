import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import GAME_STATE from '../../constants/game';

import StartGame from './StartGame/StartGame';
import Starting from './Starting/Starting';
import Lose from './Lose/Lose';
import InvalidState from './InvalidState';
import PlayerTurn from './PlayerTurn/PlayerTurn';
import DealerTurn from './DealerTurn/DealerTurn';

const ActionBar = () => {
  const { currentState } = useSelector((state: RootState) => state.game);

  switch (currentState) {
    case GAME_STATE.Idle:
      return <StartGame />;
    case GAME_STATE.Starting:
      return <Starting />;
    case GAME_STATE.PlayerTurn:
      return <PlayerTurn />;
    case GAME_STATE.PlayerLose:
      return <Lose />;
    case GAME_STATE.DealerTurn:
      return <DealerTurn />;
    default:
      return <InvalidState />;
  }
};

export default ActionBar;

import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import GAME_STATE from '../../constants/game';

import StartGame from './StartGame/StartGame';
import Starting from './Starting/Starting';
import InvalidState from './InvalidState';

const ActionBar = () => {
  const { currentState } = useSelector((state: RootState) => state.game);

  switch (currentState) {
    case GAME_STATE.Idle:
      return <StartGame />;
    case GAME_STATE.Starting:
      return <Starting />;
    default:
      return <InvalidState />;
  }
};

export default ActionBar;

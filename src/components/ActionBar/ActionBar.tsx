import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import GAME_STATE from '../../constants/game';

import StartGame from './StartGame/StartGame';
import InvalidState from './InvalidState';

const ActionBar = () => {
  const { currentState } = useSelector((state: RootState) => state.game);

  switch (currentState) {
    case GAME_STATE.Idle:
      return <StartGame />;
    default:
      return <InvalidState />;
  }
};

export default ActionBar;

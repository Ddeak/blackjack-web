import { createAction } from '@reduxjs/toolkit';
import GAME_STATE from '../../constants/game';

export const resetGame = createAction('Game/resetGame');

export const addDealerCard = createAction('Game/addDealerCard');
export const addPlayerCard = createAction('Game/addPlayerCard');

export const updateGameState = createAction<keyof typeof GAME_STATE>(
  'Game/UpdateGameState'
);

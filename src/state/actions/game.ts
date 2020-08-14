import { createAction } from '@reduxjs/toolkit';

export const resetGame = createAction('Game/resetGame');

export const addDealerCard = createAction('Game/addDealerCard');
export const addPlayerCard = createAction('Game/addPlayerCard');

import { createAction } from '@reduxjs/toolkit';
import { Card } from '../../types/card';

export const addDealerCard = createAction<Card>('Game/addDealerCard');
export const addPlayerCard = createAction<Card>('Game/addPlayerCard');

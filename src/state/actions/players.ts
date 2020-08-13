import { createAction } from '@reduxjs/toolkit';
import { Card } from '../../types/card';

export const addDealerCard = createAction<Card>('Player/addDealerCard');
export const addPlayerCard = createAction<Card>('Player/addPlayerCard');

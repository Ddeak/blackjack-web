import { createAction } from '@reduxjs/toolkit';
import { Card } from '../../types/card';

export const drawCard = createAction<Card>('Deck/drawCard');
export const initialiseDeck = createAction('Deck/initialiseDeck');

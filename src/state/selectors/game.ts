import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card } from '../../types/card';

import { calculatePlayerScores } from '../helpers';

const playerCardsSelector = (state: RootState) => state.game.playerCards;
const dealerCardsSelector = (state: RootState) => state.game.dealerCards;

const scoresFromCardsSelector = (cardsInHand: Card[]): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  return calculatePlayerScores(cardsInHand);
};

export const getPlayerScores = createSelector(
  playerCardsSelector,
  scoresFromCardsSelector
);

export const getDealerScores = createSelector(
  dealerCardsSelector,
  scoresFromCardsSelector
);

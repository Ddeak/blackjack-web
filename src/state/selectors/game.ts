import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card } from '../../types/card';

const playerCardsSelector = (state: RootState) => state.game.playerCards;
const dealerCardsSelector = (state: RootState) => state.game.dealerCards;

const scoresFromCardsSelector = (cardsInHand: Card[]): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  let primaryValue = 0;
  const secondaryValue = 0;

  cardsInHand.forEach(card => {
    primaryValue += card.value;
  });

  return [primaryValue, secondaryValue];
};

export const getPlayerScores = createSelector(
  playerCardsSelector,
  scoresFromCardsSelector
);

export const getDealerScores = createSelector(
  dealerCardsSelector,
  scoresFromCardsSelector
);

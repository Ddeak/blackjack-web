import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card } from '../../types/card';
import { MAX_SCORE } from '../../constants/game';

const playerCardsSelector = (state: RootState) => state.game.playerCards;
const dealerCardsSelector = (state: RootState) => state.game.dealerCards;

const scoresFromCardsSelector = (cardsInHand: Card[]): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  let primaryValue = 0;
  let secondaryValue = -1;
  let hasAceInHand = false;

  cardsInHand.forEach((card) => {
    primaryValue += card.value;
    if (card.name === 'Ace') hasAceInHand = true;
  });

  if (hasAceInHand && primaryValue + 10 <= MAX_SCORE)
    secondaryValue = primaryValue + 10;

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

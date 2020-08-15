import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card } from '../../types/card';

import { calculatePlayerScores } from '../helpers';
import GAME_STATE from '../../constants/game';

const playerCardsSelector = (state: RootState) => state.game.playerCards;
const dealerCardsSelector = (state: RootState) => state.game.dealerCards;
const currentGameStateSelector = (state: RootState) => state.game.currentState;

const scoresFromCardsSelector = (cardsInHand: Card[]): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  return calculatePlayerScores(cardsInHand);
};

const scoresFromDealerCardsSelector = (
  cardsInHand: Card[],
  currentState: keyof typeof GAME_STATE
): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  return currentState === GAME_STATE.DealerTurn
    ? calculatePlayerScores(cardsInHand)
    : calculatePlayerScores(cardsInHand.slice(1));
};

const createDisplayFromScores = (scores: [number, number]) => {
  let scoreToDisplay = `${scores[0]}`;
  if (scores[1] > 0) scoreToDisplay += ` or ${scores[1]}`;

  return scoreToDisplay;
};

export const getPlayerScores = createSelector(
  playerCardsSelector,
  scoresFromCardsSelector
);

export const getDealerScores = createSelector(
  dealerCardsSelector,
  currentGameStateSelector,
  scoresFromDealerCardsSelector
);

export const getDealerDisplayScore = createSelector(
  getDealerScores,
  createDisplayFromScores
);

export const getPlayerDisplayScore = createSelector(
  getPlayerScores,
  createDisplayFromScores
);

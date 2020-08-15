import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card } from '../../types';

import { calculatePlayerScores } from '../helpers';
import GAME_STATE, { MAX_SCORE } from '../../constants/game';

const playerCardsSelector = (state: RootState) => state.game.playerCards;
const dealerCardsSelector = (state: RootState) => state.game.dealerCards;
const currentGameStateSelector = (state: RootState) => state.game.currentState;

const scoresFromCardsSelector = (cardsInHand: Card[]): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  return calculatePlayerScores(cardsInHand);
};

const scoresFromDealerCardsSelector = (
  cardsInHand: Card[],
  hideDealerCard: boolean
): [number, number] => {
  if (cardsInHand.length === 0) return [0, 0];

  return hideDealerCard
    ? calculatePlayerScores(cardsInHand.slice(1))
    : calculatePlayerScores(cardsInHand);
};

const createDisplayFromScores = (scores: [number, number]) => {
  let scoreToDisplay = `${scores[0]}`;
  if (scores[1] > 0) scoreToDisplay += ` or ${scores[1]}`;

  return scoreToDisplay;
};

export const hideDealerCardSelector = createSelector(
  currentGameStateSelector,
  (currentState) => {
    return (
      currentState === GAME_STATE.Starting ||
      currentState === GAME_STATE.PlayerTurn
    );
  }
);

export const getPlayerScores = createSelector(
  playerCardsSelector,
  scoresFromCardsSelector
);

export const getDealerScores = createSelector(
  dealerCardsSelector,
  hideDealerCardSelector,
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

export const preventPlayerHitSelector = createSelector(
  getPlayerScores,
  (scores) => scores[0] === MAX_SCORE || scores[1] === MAX_SCORE
);

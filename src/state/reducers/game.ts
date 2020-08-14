import { createReducer } from '@reduxjs/toolkit';

import {
  addPlayerCard,
  addDealerCard,
  resetGame,
  updateGameState,
} from '../actions/game';
import { Card } from '../../types/card';
import { ALL_SUITS, PICTURED_CARDS } from '../../constants/card';
import GAME_STATE, { MAX_SCORE } from '../../constants/game';
import calculatePlayerScores from '../helpers';

export type GameState = {
  currentState: keyof typeof GAME_STATE;
  deck: Card[];
  dealerCards: Card[];
  playerCards: Card[];
};

const setupAndShuffleDeck = (): Card[] => {
  const deck: Card[] = [];

  ALL_SUITS.forEach((suit) => {
    for (let i = 2; i <= 10; i += 1) {
      deck.push({
        name: `${i}`,
        value: i,
        suit,
      });
    }

    PICTURED_CARDS.forEach((card) => {
      deck.push({
        name: `${card}`,
        value: 10,
        suit,
      });
    });

    deck.push({
      name: `Ace`,
      value: 1,
      suit,
    });
  });

  deck.sort(() => Math.random() - 0.5);

  return deck;
};

export const initialState: GameState = {
  currentState: GAME_STATE.Idle,
  deck: setupAndShuffleDeck(),
  dealerCards: [],
  playerCards: [],
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(addPlayerCard, (state) => {
      const topCard = state.deck.pop();
      if (topCard) state.playerCards.push(topCard);

      if (calculatePlayerScores(state.playerCards)[0] > MAX_SCORE)
        state.currentState = GAME_STATE.PlayerBust;
    })
    .addCase(addDealerCard, (state) => {
      const topCard = state.deck.pop();
      if (topCard) state.dealerCards.push(topCard);
    })
    .addCase(resetGame, () => ({
      ...initialState,
      deck: setupAndShuffleDeck(),
    }))
    .addCase(updateGameState, (state, action) => {
      state.currentState = action.payload;
    })
);

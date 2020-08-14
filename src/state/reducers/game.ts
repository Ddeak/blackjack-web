import { createReducer } from '@reduxjs/toolkit';

import { addPlayerCard, addDealerCard, resetGame } from '../actions/game';
import { Card } from '../../types/card';
import { ALL_SUITS, PICTURED_CARDS } from '../../constants/card';

export type GameState = {
  deck: Card[];
  dealerCards: Card[];
  playerCards: Card[];
};

const setupAndShuffleDeck = (): Card[] => {
  const deck: Card[] = [];

  ALL_SUITS.forEach((suit) => {
    for (let i = 2; i <= 10; i += 1) {
      deck.push({
        name: `${i} of ${suit}`,
        value: i,
        suit,
      });
    }

    PICTURED_CARDS.forEach((card) => {
      deck.push({
        name: `${card} of ${suit}`,
        value: 10,
        suit,
      });
    });

    deck.push({
      name: `Ace of ${suit}`,
      value: 1,
      suit,
    });
  });

  deck.sort(() => Math.random() - 0.5);

  return deck;
};

export const initialState: GameState = {
  deck: setupAndShuffleDeck(),
  dealerCards: [],
  playerCards: [],
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(addPlayerCard, (state) => {
      const topCard = state.deck.pop();
      if (topCard) state.playerCards.push(topCard);
    })
    .addCase(addDealerCard, (state) => {
      const topCard = state.deck.pop();
      if (topCard) state.dealerCards.push(topCard);
    })
    .addCase(resetGame, () => ({
      ...initialState,
      deck: setupAndShuffleDeck(),
    }))
);

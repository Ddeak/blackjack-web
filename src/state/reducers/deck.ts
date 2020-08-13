import { createReducer } from '@reduxjs/toolkit';

import { drawCard, initialiseDeck } from '../actions/deck';
import { Card } from '../../types/card';

type PlayerState = {
  cards: Card[];
};

const initialState: PlayerState = {
  cards: []
};

const setupAndShuffleDeck = (): Card[] => {
  const deck: Card[] = [];

  ['Spades', 'Diamonds', 'Hearts', 'Clubs'].forEach(suit => {
    for (let i = 2; i <= 10; i += 1) {
      deck.push({
        name: `${i} of ${suit}`,
        value: i
      });
    }

    ['Jack', 'Queen', 'King'].forEach(card => {
      deck.push({
        name: `${card} of ${suit}`,
        value: 10
      });
    });

    deck.push({
      name: `Ace of ${suit}`,
      value: 1
    });
  });

  deck.sort(() => Math.random() - 0.5);

  return deck;
};

export default createReducer(initialState, builder =>
  builder
    .addCase(drawCard, state => {
      state.cards.pop();
    })
    .addCase(initialiseDeck, state => {
      state.cards = setupAndShuffleDeck();
    })
);

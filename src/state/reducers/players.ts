import { createReducer } from '@reduxjs/toolkit';

import { addPlayerCard, addDealerCard } from '../actions/players';
import { Card } from '../../types/card';

type PlayerState = {
  dealerCards: Card[];
  playerCards: Card[];
};

const initialState: PlayerState = {
  dealerCards: [],
  playerCards: []
};

export default createReducer(initialState, builder =>
  builder
    .addCase(addPlayerCard, (state, action) => {
      state.playerCards.push(action.payload);
    })
    .addCase(addDealerCard, (state, action) => {
      state.dealerCards.push(action.payload);
    })
);

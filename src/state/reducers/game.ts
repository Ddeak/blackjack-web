import { createReducer } from '@reduxjs/toolkit';

import {
  addPlayerCard,
  addDealerCard,
  resetGame,
  updateGameState,
} from '../actions/game';
import { GameState } from '../../types';

import GAME_STATE, { MAX_SCORE } from '../../constants/game';
import { calculatePlayerScores, setupAndShuffleDeck } from '../helpers';

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
        state.currentState = GAME_STATE.PlayerLose;
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

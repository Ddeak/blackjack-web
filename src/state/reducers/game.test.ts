import { addDealerCard, addPlayerCard } from '../actions/game';

import reducer, { initialState } from './game';
import { ALL_SUITS } from '../../constants/card';
import GAME_STATE from '../../constants/game';

describe('game state reducer', () => {
  test('ensure initial state is valid.', () => {
    const gameState = reducer(undefined, { type: '' });

    expect(gameState).toMatchObject({
      state: GAME_STATE.Setup,
      playerCards: [],
      dealerCards: [],
    });

    expect(gameState.deck.length).toEqual(52);

    ALL_SUITS.forEach((suit) => {
      const currentSuitCards = gameState.deck.filter(
        (card) => card.suit === suit
      );
      expect(currentSuitCards.length).toEqual(13);
    });
  });

  test('dispatch the addPlayerCard and addDealerCard actions.', () => {
    const gameState = reducer(initialState, addPlayerCard());

    expect(gameState.playerCards.length).toEqual(1);
    expect(gameState.deck.length).toEqual(51);
    expect(gameState.dealerCards.length).toEqual(0);

    const nextGameState = reducer(gameState, addDealerCard());

    expect(nextGameState.playerCards.length).toEqual(1);
    expect(nextGameState.deck.length).toEqual(50);
    expect(nextGameState.dealerCards.length).toEqual(1);
  });
});

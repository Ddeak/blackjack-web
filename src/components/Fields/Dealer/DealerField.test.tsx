import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';

import { rootReducer } from '../../../state/store';

import DealerField from './DealerField';
import { GameState } from '../../../state/reducers/game';
import GAME_STATE from '../../../constants/game';
import { Card } from '../../../types/card';
import { createCustomGameState } from '../../../testData/deck';

test('render the DealerField without error', async () => {
  const store: Store = configureStore({ reducer: rootReducer });

  render(
    <Provider store={store}>
      <DealerField />
    </Provider>
  );

  expect(screen.getByText('Dealer Cards:')).toBeInTheDocument();
});

test('give the dealer 2 cards from the deck. The first card by default should be "Hidden".', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.PlayerTurn,
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <DealerField />
    </Provider>
  );

  expect(screen.getAllByText('Hidden').length).toEqual(1);

  const { dealerCards }: { dealerCards: Card[] } = store.getState().game;
  expect(dealerCards.length).toEqual(2);

  expect(screen.getByText('Queen')).toBeInTheDocument();
  expect(screen.getByText('Hearts')).toBeInTheDocument();

  expect(screen.getByText(/10/)).toBeInTheDocument();
});

test('the dealers cards should not be "Hidden" on their turn.', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.DealerTurn,
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <DealerField />
    </Provider>
  );

  expect(screen.queryByText('Hidden')).toBeNull();
});

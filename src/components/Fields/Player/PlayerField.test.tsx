import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';

import { rootReducer } from '../../../state/store';

import PlayerField from './PlayerField';
import { GameState, Card } from '../../../types';
import GAME_STATE from '../../../constants/game';
import { createCustomGameState } from '../../../testData/deck';

test('render the PlayerField without error', async () => {
  const store: Store = configureStore({ reducer: rootReducer });
  render(
    <Provider store={store}>
      <PlayerField />
    </Provider>
  );

  expect(screen.getByText('Player Cards:')).toBeInTheDocument();
});

test('ensure two test cards are rendered in the player field.', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.PlayerTurn,
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <PlayerField />
    </Provider>
  );

  const { playerCards }: { playerCards: Card[] } = store.getState().game;

  expect(playerCards.length).toEqual(2);

  expect(screen.getByText('8')).toBeInTheDocument();
  expect(screen.getByText('Clubs')).toBeInTheDocument();

  expect(screen.getByText('Ace')).toBeInTheDocument();
  expect(screen.getByText('Diamonds')).toBeInTheDocument();

  expect(screen.getByText(/9 or 19/)).toBeInTheDocument();
});

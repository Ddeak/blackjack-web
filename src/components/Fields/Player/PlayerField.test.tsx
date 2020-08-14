import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';

import { rootReducer } from '../../../state/store';

import PlayerField from './PlayerField';
import { addPlayerCard } from '../../../state/actions/game';
import { Card } from '../../../types/card';

test('render the PlayerField without error', async () => {
  const store: Store = configureStore({ reducer: rootReducer });
  render(
    <Provider store={store}>
      <PlayerField />
    </Provider>
  );

  expect(screen.getByText('Player Cards:')).toBeInTheDocument();
});

test('give the player 2 cards', async () => {
  const store: Store = configureStore({ reducer: rootReducer });
  store.dispatch(addPlayerCard());
  store.dispatch(addPlayerCard());

  render(
    <Provider store={store}>
      <PlayerField />
    </Provider>
  );

  const { playerCards }: { playerCards: Card[] } = store.getState().game;

  expect(playerCards.length).toEqual(2);

  expect(screen.getAllByText(playerCards[0].name)[0]).toBeInTheDocument();
  expect(screen.getAllByText(playerCards[0].suit)[0]).toBeInTheDocument();

  expect(screen.getAllByText(playerCards[1].name)[0]).toBeInTheDocument();
  expect(screen.getAllByText(playerCards[1].suit)[0]).toBeInTheDocument();
});

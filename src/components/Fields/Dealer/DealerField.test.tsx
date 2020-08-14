import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';

import { rootReducer } from '../../../state/store';

import DealerField from './DealerField';
import { addDealerCard } from '../../../state/actions/game';
import { Card } from '../../../types/card';

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
  const store: Store = configureStore({ reducer: rootReducer });
  store.dispatch(addDealerCard());
  store.dispatch(addDealerCard());

  render(
    <Provider store={store}>
      <DealerField />
    </Provider>
  );

  expect(screen.getAllByText('Hidden').length).toEqual(1);

  const { dealerCards }: { dealerCards: Card[] } = store.getState().game;

  expect(dealerCards.length).toEqual(2);

  expect(screen.getByText(dealerCards[1].name)).toBeInTheDocument();
  expect(screen.getByText(dealerCards[1].suit)).toBeInTheDocument();
});

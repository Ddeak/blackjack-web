import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';

import ActionBar from './ActionBar';
import { rootReducer } from '../../state/store';

let store: Store;

beforeEach(() => {
  store = configureStore({ reducer: rootReducer });
});

test('render the default action bar', () => {
  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  expect(
    screen.getByText('Press the button to start the game!')
  ).toBeInTheDocument();
});

test('advance from the "idle" stage to "starting" state.', () => {
  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  const startButton = screen.getByText('Start');
  expect(startButton).toBeInTheDocument();
  fireEvent.click(startButton);

  expect(screen.getByText('Starting...')).toBeInTheDocument();
});

test('advance from "idle" stage to "player turn" state.', async () => {
  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  fireEvent.click(screen.getByText('Start'));

  await waitForElementToBeRemoved(() => screen.getByText('Starting...'), {
    timeout: 3000,
  });

  expect(screen.getByText(/Your score is:/)).toBeInTheDocument();
});

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
import { GameState } from '../../types';
import GAME_STATE from '../../constants/game';
import { createCustomGameState } from '../../testData/deck';
import { SUITS } from '../../constants/card';

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

test('players can "hit" a card while their score is less than the max score. Going over results in a lose.', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.PlayerTurn,
  });

  store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  expect(screen.getByText('Your score is: 9 or 19')).toBeInTheDocument();

  const hitButton = screen.getByRole('button', { name: 'Hit' });
  expect(hitButton).toBeInTheDocument();

  fireEvent.click(hitButton);
  expect(screen.getByText('Your score is: 19')).toBeInTheDocument();

  fireEvent.click(hitButton);
  expect(screen.getByText(`You lose!`)).toBeInTheDocument();
});

test('resetting the game after a loss restarts the game', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.PlayerLose,
  });

  store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );
  fireEvent.click(screen.getByRole('button', { name: 'Play again?' }));
  expect(screen.getByText('Start')).toBeInTheDocument();
});

test('the player pressing "Stick" will progress the state to the dealers turn.', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.PlayerTurn,
  });

  store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  fireEvent.click(screen.getByRole('button', { name: 'Stick' }));
  expect(screen.getByText(/Dealer's turn/)).toBeInTheDocument();
});

test('display the "win" game actions when after the dealer goes bust', async () => {
  const testGameState: GameState = createCustomGameState({
    currentState: GAME_STATE.DealerTurn,
  });

  store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  await waitForElementToBeRemoved(() => screen.getByText(/Dealer's turn/), {
    timeout: 3000,
  });
  expect(screen.queryByText(/You win!/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Play again?' }));
});

test('display the "lose" game actions after the dealer gets closer to the max score.', async () => {
  const testGameState: GameState = createCustomGameState({
    deck: [{ name: '6', value: 6, suit: SUITS.HEARTS }],
    currentState: GAME_STATE.DealerTurn,
  });

  store = configureStore({
    reducer: rootReducer,
    preloadedState: { game: testGameState },
  });

  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  await waitForElementToBeRemoved(() => screen.getByText(/Dealer's turn/), {
    timeout: 3000,
  });
  expect(screen.queryByText(/You lose!/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Play again?' }));
});

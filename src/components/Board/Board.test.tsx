import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Board from './Board';

import store from '../../state/store';

test('render the board without error', async () => {
  render(
    <Provider store={store}>
      <Board />
    </Provider>
  );

  expect(screen.getByText('Blackjack Board')).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import ActionBar from './ActionBar';

import store from '../../state/store';

test('render the default action bar', async () => {
  render(
    <Provider store={store}>
      <ActionBar />
    </Provider>
  );

  expect(
    screen.getByText(/Press the button to start the game!/)
  ).toBeInTheDocument();
});

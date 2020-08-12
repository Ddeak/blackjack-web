import React from 'react';
import { render, screen } from '@testing-library/react';

import Board from './Board';

test('render the board without error', async () => {
  render(<Board />);

  expect(screen.getByText('Blackjack Board')).toBeInTheDocument();
});

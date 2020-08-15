import React from 'react';
import { render, screen } from '@testing-library/react';

import DeckRow from './DeckRow';

test('render the board without error', async () => {
  render(<DeckRow />);

  expect(screen.getByText('Deck')).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import PlayerField from './PlayerField';

test('render the PlayerField without error', async () => {
  render(<PlayerField />);

  expect(screen.getByText('Player:')).toBeInTheDocument();
});

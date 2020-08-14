import React from 'react';
import { render, screen } from '@testing-library/react';

import DealerField from './DealerField';

test('render the DealerField without error', async () => {
  render(<DealerField />);

  expect(screen.getByText('Dealer:')).toBeInTheDocument();
});

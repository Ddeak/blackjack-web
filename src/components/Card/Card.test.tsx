import React from 'react';
import { render, screen } from '@testing-library/react';

import CardView from './Card';
import CustomCard from './CustomCard';
import { Card } from '../../types';

test('render a standard card', () => {
  const testCard: Card = {
    name: 'Ace of Spades',
    value: 1,
    suit: 'Spades',
  };
  render(<CardView card={testCard} />);

  expect(screen.getByText('Ace of Spades')).toBeInTheDocument();
});

test('render a custom card', () => {
  const testMessage = 'Testing';
  render(<CustomCard message={testMessage} />);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

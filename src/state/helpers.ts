import { Card } from '../types';
import { MAX_SCORE } from '../constants/game';
import { ALL_SUITS, PICTURED_CARDS } from '../constants/card';

export const calculatePlayerScores = (cards: Card[]): [number, number] => {
  let primaryValue = 0;
  let secondaryValue = 0;
  let hasAceInHand = false;

  cards.forEach((card) => {
    primaryValue += card.value;
    if (card.name === 'Ace') hasAceInHand = true;
  });

  if (hasAceInHand && primaryValue + 10 <= MAX_SCORE)
    secondaryValue = primaryValue + 10;

  return [primaryValue, secondaryValue];
};

export const setupAndShuffleDeck = (): Card[] => {
  const deck: Card[] = [];

  ALL_SUITS.forEach((suit) => {
    for (let i = 2; i <= 10; i += 1) {
      deck.push({
        name: `${i}`,
        value: i,
        suit,
      });
    }

    PICTURED_CARDS.forEach((card) => {
      deck.push({
        name: `${card}`,
        value: 10,
        suit,
      });
    });

    deck.push({
      name: `Ace`,
      value: 1,
      suit,
    });
  });

  deck.sort(() => Math.random() - 0.5);

  return deck;
};

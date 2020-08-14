import { Card } from '../types/card';
import { MAX_SCORE } from '../constants/game';

const calculatePlayerScores = (cards: Card[]): [number, number] => {
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

export default calculatePlayerScores;

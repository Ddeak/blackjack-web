import { Card, GameState } from '../types';
import GAME_STATE, { MAX_SCORE } from '../constants/game';
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

export const isGameOver = (
  gameState: GameState
): GAME_STATE.PlayerWin | GAME_STATE.PlayerLose | GAME_STATE.DealerTurn => {
  const dealerScores = calculatePlayerScores(gameState.dealerCards);
  const dealerScore = dealerScores[1] > 0 ? dealerScores[1] : dealerScores[0];

  if (dealerScore > MAX_SCORE) return GAME_STATE.PlayerWin;

  const playerScores = calculatePlayerScores(gameState.playerCards);
  const playerScore = playerScores[1] > 0 ? playerScores[1] : playerScores[0];

  if (dealerScore > playerScore) return GAME_STATE.PlayerLose;

  return GAME_STATE.DealerTurn;
};

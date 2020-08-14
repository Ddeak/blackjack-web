import { SUITS } from '../constants/card';
import GAME_STATE from '../constants/game';
import { Card } from '../types/card';
import { GameState } from '../state/reducers/game';

export const testDeck: Card[] = [
  {
    name: 'Ace',
    value: 1,
    suit: SUITS.SPADES,
  },
  {
    name: '2',
    value: 2,
    suit: SUITS.HEARTS,
  },
  {
    name: 'Jack',
    value: 10,
    suit: SUITS.CLUBS,
  },
  {
    name: 'King',
    value: 10,
    suit: SUITS.DIAMONDS,
  },
];

export const testPlayerHand: Card[] = [
  {
    name: '8',
    value: 8,
    suit: SUITS.CLUBS,
  },
  {
    name: 'Ace',
    value: 1,
    suit: SUITS.DIAMONDS,
  },
];

export const testDealerHand: Card[] = [
  {
    name: '5',
    value: 5,
    suit: SUITS.SPADES,
  },
  {
    name: 'Queen',
    value: 10,
    suit: SUITS.HEARTS,
  },
];

export const createCustomGameState = ({
  currentState,
  deck,
  playerCards,
  dealerCards,
}: Partial<GameState>): GameState => {
  const customState: GameState = {
    currentState: currentState || GAME_STATE.PlayerTurn,
    deck: deck || testDeck,
    playerCards: playerCards || testPlayerHand,
    dealerCards: dealerCards || testDealerHand,
  };
  return customState;
};

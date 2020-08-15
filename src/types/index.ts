import GAME_STATE from '../constants/game';

export type Card = {
  name: string;
  value: number;
  suit: string;
};

export type GameState = {
  currentState: keyof typeof GAME_STATE;
  deck: Card[];
  dealerCards: Card[];
  playerCards: Card[];
};

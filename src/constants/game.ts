enum GAME_STATE {
  Idle = 'Idle',
  Starting = 'Starting',
  PlayerTurn = 'PlayerTurn',
  DealerTurn = 'DealerTurn',
  PlayerBust = 'PlayerBust',
  PlayerWon = 'PlayerWon',
}

export const MAX_SCORE = 21;

export default GAME_STATE;

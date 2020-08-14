enum GAME_STATE {
  Idle = 'Idle',
  Starting = 'Starting',
  PlayerTurn = 'PlayerTurn',
  DealerTurn = 'DealerTurn',
  PlayerLose = 'PlayerLose',
  PlayerWon = 'PlayerWon',
}

export const MAX_SCORE = 21;

export default GAME_STATE;

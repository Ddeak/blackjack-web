enum GAME_STATE {
  Idle = 'Idle',
  Starting = 'Starting',
  PlayerTurn = 'PlayerTurn',
  DealerTurn = 'DealerTurn',
  PlayerLose = 'PlayerLose',
  PlayerWin = 'PlayerWin',
}

export const MAX_SCORE = 21;

export default GAME_STATE;

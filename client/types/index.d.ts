// component types
export interface SquareProps {
  id: string | number;
  coordinates: number[];
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  value: number | string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleRightClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface BoardProps {
  selectedLevel: SelectedLevel;
}

export interface GameProps {
  selectedLevel: SelectedLevel;
}

export type SelectedLevel = 'beginner' | 'intermediate' | 'expert';

export interface TimerProps {
  reset: boolean;
  gameOver: boolean;
  gameStart: boolean;
}



// function types
export interface BoardSize {
  rows: number;
  cols: number;
  mines: number;
}

export interface State {
  gameStart: boolean;
  coordinates: number[][];
  value: (string | number)[];
  isRevealed: boolean[];
  isFlagged: boolean[];
  isMine: boolean[];
  mineCount: number;
  gameOver: boolean;
  symbol: string;
  reset: boolean;
}
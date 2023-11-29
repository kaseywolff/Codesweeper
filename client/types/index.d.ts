// component types
export interface SquareProps {
  id: string | undefined;
  isRevealed: boolean;
  isFlagged: boolean;
  value: number | string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleRightClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface BoardProps {
  selectedLevel: string;
}

export interface GameProps {
  selectedLevel: string;
}

// function types
export interface BoardSize {
  row: number;
  cols: number;
  mines: number;
}

export interface State {
  gameStart: boolean;
  coordinates: number[][];
  value: string | number;
  isRevealed: boolean[];
  isFlagged: boolean[];
  isMine: boolean[];
  mineCount: number;
  gameOver: boolean;
  symbol: string;
  reset: boolean;
}
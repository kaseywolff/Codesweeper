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
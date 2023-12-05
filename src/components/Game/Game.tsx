import React from 'react';
import Board from './Board';
import { GameProps } from '../../types/index';

export default function Game({ selectedLevel }: GameProps): JSX.Element {
  return (
    <div id="game">
      <h2>Codesweeper</h2>
      <Board selectedLevel={selectedLevel} />
    </div>
  );
};
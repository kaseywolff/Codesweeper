/* <----- BOARD SIZE BASED ON USER SELECTION -----> */

import { BoardSize, SelectedLevel } from "../types";

export default function boardSize(selectedLevel: SelectedLevel): BoardSize {
  if (selectedLevel === 'beginner') {
    return { rows: 9, cols: 9, mines: 10 };
  };

  if (selectedLevel === 'intermediate') {
    return { rows: 16, cols: 16, mines: 40 };
  };

  if (selectedLevel === 'expert') {
    return { rows: 16, cols: 30, mines: 99 };
  };
};

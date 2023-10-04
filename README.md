### What was completed before presenting

I was able to complete the following before presenting my project:
- Changing state in React
  - Revealing a single non-mine square upon a click event from the user
  - Flagging/ tagging a potential mine upon a right click (without interference from a right-click menu)
  - Revealing all squares when a mine is clicked
  - Resetting the board when the reset button is clicked
- Populating 10 mines at random
- Identifying how many mines are in the vacinity of a single square
  - Scanning surrounding squares and incrementing the value of the center square for each mine square in the vicinity
- Decrementing the number of remaining mines upon flagging a square
  - This is not an indication that the square contains a mine
- Mostly completed styling
  - There are a few changes I would like to make, but what was presented is sufficient
  
### What was not accomplished

There are several things I would have liked to accomplish that I simply ran out of time to complete before presenting. I was able to accomplish my personal MVP with what I listed above.
Things I will continue to add and work on:
- Upon clicking a square with value 0 (i.e. no surrounding mines), all surrounding 0 squares and "border squares" are revealed
  - The logic for this proved to be quite tricky and will require some more thought to accomplish
- An indication of when a player wins the game (i.e. when all squares not containing mines are revealed and squares containing mines are properly flagged)
- A user login
  - To compete with friends
  - To view a leaderboard
  - To track personal scores/ times, games completed, etc.
- A timer
  - The object of the game is to win in the shortest amount of time
- Varying levels of difficulty
  - Easy is a 9x9 grid (currently this is the only option)
  - Medium is a 16x16 grid
  - Hard is a 16x30 grid
  - Custom - a user can select the size of grid they would like to play
  - Because I did not implement varying levels of difficulty, I hard coded in what I needed for a 9x9 grid. Changing this would be a rather significant project.

### In summary

I thoroughly enjoyed working on this project. I learned a lot about React, changing state, SCSS, implementing logic, and beginning to set up a database for users.

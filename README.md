# Solo-Project

### First Project

Codesweeper is my first solo scratch project. I had a little less than three days to complete the original project, and am currently working on additional features. I wanted to keep record of my original code to see how I progress in the future, and this can be found in theOG branch. Admittedly, this code is a mess and theOG branch should not be used for any forks or clones. I created this specific branch for my own personal records and to see how I progress on my coding journey. For the most up to date changes I make, view the main or dev branches. 

## Getting Started
1. Fork and clone this repo
2. Run `npm install`
3. Run `npm run dev`
    * Currently, this will start your localhost:3000
    * Your changes will be reflected automatically when you save your file
    * I ran into issues using both localhost:3000 and localhost:8080, and plan to remedy this later down the road, but it is not a priority at this time
4. Play the game, make changes, have fun!
 

### What was completed before presenting/ my MVP after 3 days

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
  
### Currently being worked on

There are several things I am working on implementing:
- Upon clicking a square with value 0 (i.e. no surrounding mines), all surrounding 0 squares and "border squares" are revealed
  - The logic for this proved to be quite tricky and will require some more thought to accomplish
- An indication of when a player wins the game (i.e. when all squares not containing mines are revealed and squares containing mines are properly flagged)
- A user login
  - To view a leaderboard
  - To track personal scores/ times, games completed, etc.
- A timer
  - The object of the game is to win in the shortest amount of time

### Stretch Features

Some things I would like to include as stretch features:
- Connecting and competing with friends
- Varying levels of difficulty
  - Easy is a 9x9 grid (currently this is the only option)
  - Medium is a 16x16 grid
  - Hard is a 16x30 grid
  - Custom - a user can select the size of grid they would like to play
- I have encountered difficulty setting up dev/ production localhosts, so currently localhost:8080 is where you can work and view changes

Because I did not implement varying levels of difficulty, I hard coded in what I needed for a 9x9 grid. Changing this would be a rather significant project.

### In summary

I thoroughly enjoyed working on this project. I learned a lot about React, changing state, SCSS, implementing logic, and beginning to set up a database for users. Feel free to fork and clone this repo

## Hundred boxes

A basic board game.

### Installation

- Clone the repo
- Navigate to the folder and run `npm start`
- Open [http://localhost:3000/](http://localhost:3000/) and enjoy

### The Game

#### Description

You are presented with a grid of 10x10 boxes. Click on any box to start the game. Based on the starting position a level will be generated. You must check all marked boxes to complete the level, following the game rules. Each new level will have one more box than the previous level. Beat all 99 levels to complete the game.

#### Rules

Click on any field to start the level. From there on, you can mark the boxes that are distanced from the active box exactly:

- three fields vertically and horizontally (up, down, left, right)
- two fields diagonally

Check all of the marked boxes to complete the level.

#### Lives

When level is ​completed you ​gain a life​. When you fail to complete a level you lose a number of lives equal to the
number of unchecked boxes in that level.

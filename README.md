# Whack-A-Mole
> Uses React Native to build a whack a mole game

Tap on the moles to get 10 points, if you miss 3 will be subtracted.

## Installation

Linux:

```sh
npm install or yarn
```
Link of the [apk](https://drive.google.com/file/d/1DZnV4Zvws3qMcbJ2uHrOyS5pBMaRpPCs/view?usp=sharing)

## Thought Process:
1. Decided to create the start Screen.
2. As soon as the start game button is pressed the game will be started and the screen must be navigated to the game screen. using the store the state will be updated.
3. The time starts as soon as the component gets mounted.
4. The layout muat be dynamic for different screen size. this will depend on the size of the screen that's left after the top image height is subtracted from the total height. This gives us the idea in how many rows the space can be distributed.
5. Now the moles must be animated and translated in the Y direction depending on the speed of the game.
6. The biggest challenge was thinking of a way to hide the mole when it is inside the hole. Turned out it was easy but coming up with it took some time.
7. To move more than one mole at a time there must be a list of mole numbers that we want to move. That is used to match and move only those whose number matches.
8. Now the score component should only be visible only and only when the time is up. Thus, then the game must be stopped and a value must be set to allow easy toggle for score componen.

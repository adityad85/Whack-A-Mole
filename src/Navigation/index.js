import { createSwitchNavigator } from 'react-navigation';
import StartScreen from '../Screens/StartScreen';
import GameScreen from '../Screens/GameScreen';

const Game = createSwitchNavigator(
  {
    StartScreen,
    GameScreen,
  },
  {
    initialRouteName: 'StartScreen',
  },
);

export default Game;

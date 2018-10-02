import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const molesConstants = {
  ROWS: 6,
  FIRST_MOLE_POSITION: 0,
  SECOND_MOLE_POSITION: width - 150,
  CENTER_MOLE_POSITION: width / 2 - 65,
  MOLE_START_POSITION: 0,
  ROW_HEIGHT: 70,
  WIDTH: width,
};

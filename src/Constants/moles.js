import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const molesConstants = {
  FIRST_MOLE_POSITION: 0,
  SECOND_MOLE_POSITION: width - 150,
  CENTER_MOLE_POSITION: width / 2 - 65,
  MOLE_START_POSITION: 0,
  ROW_HEIGHT: 70,
  ROWS: Math.floor((height - 190) / 70 - 1),
  WIDTH: width,
  NO_OF_MOLES: Math.floor(
    Math.floor(
      Math.floor((height - 190) / 70) / 2,
    ) + 2 * (
      Math.floor(Math.floor((height - 190) / 70) / 2)
    ),
  ),
};

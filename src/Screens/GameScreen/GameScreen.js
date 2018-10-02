import React from 'react';
import { View, Image } from 'react-native';

// import ScoreComponent from '../../Components/ScoreComponent';

import topPanel from '../../assets/game-screen-top.png';
import { molesConstants } from '../../Constants/moles';
import Mole from '../../Components/Mole/Mole';
import styles from './gameScreenStyle';

const buildMoles = () => {
  const moles = [];
  let row = 0;
  let moleNumber = 1;
  while (row < molesConstants.ROWS) {
    if (row % 2 === 0) {
      // even for two moles
      let i = 0;
      while (i < 2) {
        let horizontalPos;
        if (i === 0) {
          horizontalPos = molesConstants.FIRST_MOLE_POSITION;
        } else {
          horizontalPos = molesConstants.SECOND_MOLE_POSITION;
        }
        let verticalPos;
        if (row === 0) {
          verticalPos = molesConstants.MOLE_START_POSITION;
        } else {
          verticalPos = row * molesConstants.ROW_HEIGHT;
        }
        moles.push(
          <Mole
            moleNumber={moleNumber}
            key={`${moleNumber}${row}`}
            horizontalPos={horizontalPos}
            verticalPos={verticalPos}
          />,
        );
        i += 1;
        moleNumber += 1;
      }
    } else {
      moles.push(
        <Mole
          moleNumber={moleNumber}
          key={`${moleNumber}${row}`}
          horizontalPos={molesConstants.CENTER_MOLE_POSITION}
          verticalPos={row * molesConstants.ROW_HEIGHT}
        />,
      );
      moleNumber += 1;
    }
    row += 1;
  }
  return moles;
};

class GameScreen extends React.Component {
  render() {
    const moles = buildMoles();
    // const showHere = true;
    return (
      <View>
        {/* <ScoreComponent show={showHere} /> */}
        <View style={{ height: 200 }}>
          <Image
            source={topPanel}
            style={styles.topPanel}
          />
          {/* <Text>{this.props.score}</Text> */}
        </View>
        <View>
          {moles}
        </View>
      </View>
    );
  }
}

export default GameScreen;

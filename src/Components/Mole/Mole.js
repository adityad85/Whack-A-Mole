import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import holeImage from '../../assets/hole.png';
import holeMaskImage from '../../assets/holeMask.png';
import moleImage from '../../assets/mole.png';

import styles from './moleStyles';

class Mole extends React.Component {
  render() {
    const { horizontalPos, verticalPos } = this.props;
    return (
      <Animated.View
        style={[
          styles.wrapper,
          {
            left: horizontalPos,
            top: verticalPos,
          },
        ]}
      >
        <Animated.Image
          source={holeImage}
          style={styles.holeImage}
        />

        <Animated.Image
          source={holeMaskImage}
          style={styles.holeMaskImage}
        />
        <Animated.View
          style={styles.moleImageWrapper}
        >
          <TouchableOpacity
            style={styles.moleImageClickable}
            activeOpacity={0.8}
          >
            <Animated.Image
              source={moleImage}
              style={styles.moleImage}
            />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  }
}

Mole.propTypes = {
  horizontalPos: PropTypes.number.isRequired,
  verticalPos: PropTypes.number.isRequired,
};

export default Mole;

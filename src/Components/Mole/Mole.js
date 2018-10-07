import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import holeImage from '../../assets/hole.png';
import holeMaskImage from '../../assets/holeMask.png';
import moleImage from '../../assets/mole.png';

import styles from './moleStyles';

class Mole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      molePos: new Animated.Value(1),
    };
    this.isMoving = false;
  }

  componentDidMount() {
    const { speed, moleNumber, moveMoleAt } = this.props;
    this.moveMole(speed, moleNumber, moveMoleAt);
  }

  componentWillReceiveProps() {
    const {
      speed, moleNumber, moveMoleAt, isEnded, 
    } = this.props;
    const { molePos } = this.state;
    this.moveMole(speed, moleNumber, moveMoleAt);
    if (isEnded) {
      molePos.setValue(1);
      molePos.stopAnimation();
    }
  }

  moveMole(speed, moleNumber, moveMoleAt) {
    const { missMole, isEnded } = this.props;
    const { molePos } = this.state;
    if (moveMoleAt.indexOf(moleNumber) !== -1 && !this.isMoving) {
      this.isMoving = true;
      Animated.sequence([
        Animated.timing(molePos, {
          toValue: 0,
          duration: speed,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(molePos, {
          toValue: 1,
          duration: speed,
          delay: 50,
          useNativeDriver: true,
        }),
      ]).start((isEvent) => {
        this.isMoving = false;
        if (isEvent.finished && !isEnded) {
          missMole();
        }
      });
    }
  }

  render() {
    const { horizontalPos, verticalPos, hitMole } = this.props;
    const { molePos } = this.state;
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
          style={[
            styles.moleImageWrapper,
            {
              transform: [
                {
                  translateY: molePos.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 120],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.moleImageClickable}
            activeOpacity={0.5}
            onPress={() => {
              molePos.setValue(1);
              hitMole();
            }}
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
  hitMole: PropTypes.func.isRequired,
  isEnded: PropTypes.bool.isRequired,
  missMole: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
  moleNumber: PropTypes.number.isRequired,
};

export default Mole;

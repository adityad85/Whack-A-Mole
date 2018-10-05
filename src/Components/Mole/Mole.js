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
    this.moveMole(this.props.speed, this.props.moleNumber, this.props.moveMoleAt);
  }
  
  componentWillReceiveProps(nextProps) {
    this.moveMole(this.props.speed, this.props.moleNumber, this.props.moveMoleAt);
  }

  moveMole(speed, moleNumber, moveMoleAt) {
    if (moveMoleAt.indexOf(moleNumber) !== -1 && !this.isMoving) {
      this.isMoving = true;
      Animated.sequence([
        Animated.timing(this.state.molePos, {
          toValue: 0,
          duration: speed,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.molePos, {
          toValue: 1,
          duration: speed,
          delay: 50,
          useNativeDriver: true,
        }),
      ]).start(() => {
        this.isMoving = false;
      });
    }
  }

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
          style={[
            styles.moleImageWrapper,
            {
              transform: [
                {
                  translateY: this.state.molePos.interpolate({
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
              this.state.molePos.setValue(1);
              // call the total hit action
              this.props.hitMole();
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
};

export default Mole;

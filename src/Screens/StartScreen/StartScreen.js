import React from 'react';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './startScreenStyle';
import buttonImage from '../../assets/gameBtn.png';

class Start extends React.Component {
  render() {
    const { navigation, startGame } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.headerFont}>Whack the Mole</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonWrapper}
          onPress={() => {
            navigation.navigate('GameScreen');
            startGame();
          }}
        >
          <Image
            source={buttonImage}
            style={styles.imageButtonStyle}
          />
          <Text style={styles.buttonTextStyle}>Start Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Start.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Start;

import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import buttonImage from '../../assets/gameBtn.png';
import styles from './scoreStyle';

class ScoreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isEnded != this.props.isEnded && nextProps.isEnded) {
      this.setState({ showAlert: true });
    }
  }

  render() {
    const { totalHits } = this.props;
    const { show } = this.state;
    const { openStartScreen, restartGame } = this.props;
    
    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={true}
        onRequestClose={() => ({})}
      >
        <View style={styles.scoreWrapper}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreFont}>
              {`You Scored: ${this.props.score}`}
            </Text>
            <Text>
              {`Total Hits: ${totalHits}`}
            </Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonImage}
                onPress={() => {
                  openStartScreen();
                }}
              >
                <Image
                  source={buttonImage}
                  style={styles.buttonImageStyle}
                />
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonImage}
                activeOpacity={0.5}
                onPress={() => {
                  restartGame();
                }}
              >
                <Image
                  style={styles.buttonImageStyle}
                  source={buttonImage}
                />
                <Text style={styles.buttonText}>Restart Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

ScoreComponent.propTypes = {
  totalHits: PropTypes.number.isRequired,
};

export default ScoreComponent;

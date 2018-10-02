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
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   showBox: false,
  //   // };
  // }

  render() {
    const { show, totalHits } = this.props;
    // const { showBox } = this.state;
    console.log(show);
    return (
      <Modal
        transparent
        animationType="slide"
        visible={show}
        onRequestClose={() => ({})}
      >
        <View style={styles.scoreWrapper}>
          <View style={styles.scoreBox}>
            <Text>
              {`You Scored$
              {this.props.score}
            `}
            </Text>
            <Text>
              {`Total Hits: ${totalHits}`}
            </Text>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
              >
                <Image
                  source={buttonImage}
                />
                <Text>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
              >
                <Image
                  source={buttonImage}
                />
                <Text>Restart Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

ScoreComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  totalHits: PropTypes.number.isRequired,
};

export default ScoreComponent;

import React from 'react';
import { Text } from 'react-native'; 

import styles from './clockStyles';

class Clock extends React.Component {
  getMinutes(time) {
    const min = Math.floor(time/60);
    return min;
  }

  getSeconds(time) {
    const sec = Math.floor(time%60);
    return sec;
  }

  render() {
    const min = this.getMinutes(this.props.time);
    const sec = this.getSeconds(this.props.time);
    return (
        <Text style={styles.time}>
        {`${min}:${sec}`}
        </Text>
    );
  }
}

export default Clock;

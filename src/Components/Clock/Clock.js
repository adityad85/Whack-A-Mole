import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './clockStyles';
import { getMinutes, getSeconds } from '../../Helpers/clockCalculation';


const Clock = (props) => {
  const { time } = props;
  const min = getMinutes(time);
  const sec = getSeconds(time);
  return (
    <Text style={styles.time}>
      {`${min}:${sec}`}
    </Text>
  );
};

Clock.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Clock;

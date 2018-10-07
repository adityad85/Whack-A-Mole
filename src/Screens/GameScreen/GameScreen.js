import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import ScoreComponent from '../../Components/ScoreComponent';

import topPanel from '../../assets/game-screen-top.png';
import { molesConstants } from '../../Constants/moles';
import Mole from '../../Components/Mole';
import styles from './gameScreenStyle';

import buttonImage from '../../assets/gameBtn.png';
import Clock from '../../Components/Clock';
import { generateMolesAt } from '../../Helpers/moles';


class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1000,
      time: 5,
      moveMoleAt: [
        Math.floor(Math.random() * molesConstants.NO_OF_MOLES) + 1,
      ],
    };
    this.openStartScreen = this.openStartScreen.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.buildMoles = this.buildMoles.bind(this);
  }

  componentDidMount() {
    this.startGame();
    this.startClock();
  }

  buildMoles() {
    const moles = [];
    const { speed, moveMoleAt } = this.state;
    let row = 0;
    let moleNumber = 1;
    while (row < molesConstants.ROWS) {
      if (row % 2 === 0) {
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
              speed={speed}
              moveMoleAt={moveMoleAt}
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
            speed={speed}
            moveMoleAt={moveMoleAt}
          />,
        );
        moleNumber += 1;
      }
      row += 1;
    }
    return moles;
  }

  startClock() {
    const { time } = this.state;
    if (time === 0) {
      return;
    }
    this.setState(() => ({
      time: time - 1,
    }));
    setTimeout(() => this.startClock(), 1000);
  }

  startGame() {
    const { stop } = this.props;
    const { time } = this.state;
    if (time === 0) {
      stop();
      return;
    }
    this.setState({
      moveMoleAt: generateMolesAt(),
    });
    setTimeout(() => this.startGame(), 1000);
  }

  openStartScreen() {
    const { navigation } = this.props;
    const { reset } = this.props;
    reset();
    navigation.navigate('StartScreen');
    this.startGame();
    this.startClock();
  }

  restartGame() {
    const { start, reset } = this.props;
    reset();
    this.setState(() => ({ show: false, time: 5 }), () => {
      start();
      this.startGame();
      this.startClock();
    });
  }

  render() {
    const moles = this.buildMoles();
    const { time } = this.state;
    const { isEnded, score, totalHits } = this.props;
    return (
      <View style={styles.wrapper}>
        {isEnded && (
        <ScoreComponent
          openStartScreen={this.openStartScreen}
          restartGame={this.restartGame}
        />
        )}
        <View style={{ height: 200 }}>
          <Image
            source={topPanel}
            style={styles.topPanel}
          />
          <View style={[styles.buttonWrapper, { left: 30 }]}>
            <Image
              source={buttonImage}
              style={styles.button}
            />
            <Text style={styles.time}>
              {score}
            </Text>
          </View>
          <View>
            <Text style={[styles.time, { top: 20 }]}>
              {totalHits}
            </Text>
          </View>
          <View style={[styles.buttonWrapper, { right: 30 }]}>
            <Image
              source={buttonImage}
              style={styles.button}
            />
            <Clock time={time} />
          </View>
        </View>
        <View style={styles.game}>
          {moles}
        </View>
      </View>
    );
  }
}

GameScreen.propTypes = {
  isEnded: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  totalHits: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default GameScreen;

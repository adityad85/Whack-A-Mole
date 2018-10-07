import React from 'react';
import { View, Image, Text } from 'react-native';

import ScoreComponent from '../../Components/ScoreComponent';

import topPanel from '../../assets/game-screen-top.png';
import { molesConstants } from '../../Constants/moles';
import Mole from '../../Components/Mole';
import styles from './gameScreenStyle';

import buttonImage from '../../assets/gameBtn.png';
import Clock from '../../Components/Clock';


class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1000,
      time: 120,
      show: false,
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
    // already started from the main page
    // this.props.start();
    this.startClock();
  }

  buildMoles() {
    const moles = [];
    const { speed, moveMoleAt } = this.state;
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
            speed={this.state.speed}
            moveMoleAt={this.state.moveMoleAt}
          />,
        );
        moleNumber += 1;
      }
      row += 1;
    }
    return moles;
  }

  generateMolesAt() {
    const molesIndexes = [];
    const moleNumber = Math.round(Math.random() * 2 + 1);
    for (let i = 0; i < moleNumber; i += 1) {
      molesIndexes[i] = Math.floor(Math.random() * molesConstants.NO_OF_MOLES + 1);
    }
    return molesIndexes;
  }

  startClock() {
    // get from state time current
    const { time } = this.state;
    const { stop } = this.props;
    // subtract one using state
    // if (isgameEnd === true) {
    // return ;
    // }
    if (time === 0) {
      // end time and end game
      return;
    }
    this.setState(() => ({
      time: time - 1,
    }));
    // check if isRunning or has game ended is true then stop
    setTimeout(() => this.startClock(), 1000);
  }

  startGame() {
    // start clock
    // send the index to move the next mole
    //
    const { stop } = this.props;
    const { time } = this.state;
    if (time === 0) {
      this.setState({ show: true });
      stop();
      return;
    }
    this.setState({
      moveMoleAt: this.generateMolesAt(),
    });
    setTimeout(() => this.startGame(), 1000);
  }

  openStartScreen() {
    // const { navigation } = this.state;
    const { reset } = this.props;
    reset();
    this.props.navigation.navigate('StartScreen');
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
    // reset();
    // start();
    // this.props.start();
    // this.props.navigation.navigate('GameScreen');
  }

  render() {
    const moles = this.buildMoles();
    const { time } = this.state;
    const { isEnded } = this.props;
    return (
      <View style={styles.wrapper}>
        {this.state.show && <ScoreComponent  
          openStartScreen={this.openStartScreen}
          restartGame={this.restartGame}
        />}
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
              {this.props.score}
            </Text>
          </View>
          <View>
            <Text style={[styles.time, { top: 20 }]}>
            {this.props.totalHits}
            </Text>
          </View>
          <View style={[styles.buttonWrapper, { right: 30 }]}>
            <Image
              source={buttonImage}
              style={styles.button}
            />
            {/* <Text style={styles.time}>
              {time}
            </Text> */}
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

export default GameScreen;

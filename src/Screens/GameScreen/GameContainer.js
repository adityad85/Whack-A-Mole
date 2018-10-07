import { connect } from 'react-redux';
import GameScreen from './GameScreen';
import { userActions } from '../../Redux/Actions';

const mapStateToProps = state => ({
  score: state.scorePlay.score || 0,
  totalHits: state.scorePlay.totalHits,
  isEnded: state.gameStatus.isEnded,
});

const mapDispatchToProps = {
  start: userActions.start,
  stop: userActions.stop,
  reset: userActions.resetGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

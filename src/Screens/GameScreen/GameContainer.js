import { connect } from 'react-redux';
import GameScreen from './GameScreen';
import { userActions } from '../../Redux/Actions/userActions';

const mapStateToProps = state => ({
  score: state.scorePlay.score || 0,
});

const mapDispatchToProps = {
  start: userActions.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

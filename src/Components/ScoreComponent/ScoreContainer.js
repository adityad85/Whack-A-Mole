import { connect } from 'react-redux';
import ScoreComponent from './ScoreComponent';

const mapStateToProps = (state) => {
  return {
    totalHits: state.gameStatus.totalHits,
    score: state.scorePlay.score,
  };
};

export default connect(mapStateToProps)(ScoreComponent);

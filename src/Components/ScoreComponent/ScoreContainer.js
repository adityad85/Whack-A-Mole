import { connect } from 'react-redux';
import ScoreComponent from './ScoreComponent';

const mapStateToProps = (state) => {
  return {
    totalHits: state.gameStatus.totalHits,
    score: state.scorePlay.score,
    isEnded: state.gameStatus.isEnded,
  };
};

export default connect(mapStateToProps)(ScoreComponent);

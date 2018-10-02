import { connect } from 'react-redux';
import ScoreComponent from './ScoreComponent';

const mapStateToProps = (state) => {
  return {
    totalHits: state.gameActions.totalHits,
  };
};

export default connect(mapStateToProps)(ScoreComponent);

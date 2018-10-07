import { connect } from 'react-redux';
import { gameActions } from '../../Redux/Actions';
import Mole from './Mole';

const mapDispatchToProps = {
  hitMole: gameActions.hitMole,
  missMole: gameActions.missMole,
};

const mapStateToProps = state => ({
  isEnded: state.gameStatus.isEnded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Mole);

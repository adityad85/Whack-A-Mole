import { connect } from 'react-redux';
import Start from './StartScreen';
import { userActions } from '../../Redux/Actions';

const mapDispatchToProps = {
  startGame: userActions.start,
};

export default connect(null, mapDispatchToProps)(Start);

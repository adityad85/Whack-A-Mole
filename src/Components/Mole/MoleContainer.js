import { connect } from 'react-redux';
import { gameActions } from '../../Redux/Actions/gameActions';
import Mole from './Mole';

const mapDispatchToProps = {
  hitMole: gameActions.hitMole,
};

export default connect(null, mapDispatchToProps)(Mole);

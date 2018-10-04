import { StyleSheet } from 'react-native';
import { molesConstants } from '../../Constants/moles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#C9BF9C',
  },
  topPanel: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 190,
    width: molesConstants.WIDTH,
  },
  game: {
    flex: 1,
    position: 'absolute',
    top: 165,
  },
});


export default styles;

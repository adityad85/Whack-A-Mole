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
  time: {
    fontWeight: '500',
    fontSize: 22,
    color: '#000',
    paddingBottom: 5,
    alignSelf: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    top: 20,
    height: 40,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: 40,
    width: 110,
    top: 0,
    left: 0,
  },
});


export default styles;

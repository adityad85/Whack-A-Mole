import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 110,
    width: 150,
    overflow: 'hidden',
  },
  holeImage: {
    position: 'absolute',
    resizeMode: 'center',
    height: 70,
    width: 130,
    left: 10,
    bottom: 0,
    zIndex: 10,
  },
  holeMaskImage: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 30,
    width: 150,
    bottom: 0,
    zIndex: 50,
  },
  moleImageWrapper: {
    position: 'absolute',
    height: 150,
    width: 110,
    left: 20,
    zIndex: 15,
    bottom: -60, // check
  },
  moleImage: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 150,
    width: 110,
  },
  moleImageClickable: {
    height: 150,
    width: 110,
  },
});

export default styles;

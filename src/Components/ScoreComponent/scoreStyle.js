import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scoreWrapper: {
    flex: 1,
    alignItems: 'center',
    // flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  scoreBox: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    maxWidth: width * 0.5,
    padding: 20,
  },
  buttonImage: {
    // justifyContent: 'center',
    margin: 5,
    padding: 5,
  },
  buttonImageStyle: {
    resizeMode: 'stretch',
    // position: 'absolute',
    height: 50,
    // top: 0,
    // left: 0,
    width: width * 0.3,
  },
  scoreFont: {
    fontSize: 20,
    padding: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonText: {
    position: 'absolute',
    fontWeight: '500',
    fontSize: 16,
    // textAlign: 'center',
    alignSelf: 'center',
    top: 15,
  }
});

export default styles;

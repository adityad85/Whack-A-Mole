import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerFont: {
    fontWeight: '500',
    fontSize: 28,
    color: '#000',
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonWrapper: {
    height: 64,
    width: 200,
    top: 0,
    left: 0,
  },
  imageButtonStyle: {
    resizeMode: 'contain',
    position: 'absolute',
  },
  buttonTextStyle: {
    fontWeight: '500',
    fontSize: 24,
    color: '#000',
    paddingTop: 10,
    alignSelf: 'center',
  },
});

export default styles;

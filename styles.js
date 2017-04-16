import {
  StyleSheet
} from 'react-native';

styles = StyleSheet.create({
  emojiViewContainer: {
    marginTop: 40,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: 'powderblue',
    justifyContent: 'space-around',
  },
  emoji: {
    flexGrow: 1,
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

module.exports = styles;

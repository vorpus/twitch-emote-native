import React, { Component } from 'react';
import {
  StatusBar,
  AppRegistry,
  View
} from 'react-native';
import EmojiView from './components/EmojiView';

export default class ListsList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle='dark-content'
          hidden={false}
          />
        <EmojiView />
      </View>
    );
  }
}

AppRegistry.registerComponent('ListsList', () => ListsList);

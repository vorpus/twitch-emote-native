import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from '../styles';

export default class Emoji extends Component {
  render() {
    return (
      <View style={styles.emoji}>
        <Image
          source={{uri: this.props.url}}
          style={{width:30, height: 30}}
          />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

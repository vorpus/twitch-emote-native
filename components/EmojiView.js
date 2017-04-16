import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import Emoji from './Emoji';
import styles from '../styles';

export default class EmojiView extends Component {
  state = {}

  fetchTwitchEmotes() {
    fetch('https://twitchemotes.com/api_cache/v2/global.json')
      .then(res => res.json())
      .then((res) => this.setState(res))
      .catch((err) => {
        console.error(err);
      });
  }

  createEmoteUrl(emote) {
    if (this.state.emotes) {
      const emoteId = this.state.emotes[emote].image_id;
      const template = this.state.template.small;

      return template.replace('{image_id}', emoteId);
    }
  }

  render() {
    this.fetchTwitchEmotes();

    const eachEmote = () => {
      let emotes = [];
      for (let emote in this.state.emotes) {
        emotes.push(<Emoji key={emote} name={emote} url={this.createEmoteUrl(emote)} />);
      }
      return emotes;
    }

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.emojiViewContainer}>
        {eachEmote()}
        </View>
      </ScrollView>
    )
  }
}

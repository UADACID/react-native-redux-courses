/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Root component</Text>
      </View>
    );
  }
}

export default connect()(Root)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

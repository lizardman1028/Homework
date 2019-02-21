import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

yote = {
  testVar: 10
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Yeetus der Fötus</Text>
        <Text>{this.yote.testVar}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

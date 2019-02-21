import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
state = {testVar: 9}
handleIncrement = () => {
  this.setState({ count: this.state.count + 1 })
}

handleDecrement = () => {
  this.setState({ count: this.state.count - 1 })
}
  render() {
    return (
      <View style={styles.container}>
        <Text>Yeetus der Fötus</Text>
        <Text>{this.state.testVar}</Text>
        <Button
          onPress={handleIncrement}
          title="UP"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={handleDecrement}
          title="DOWN"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

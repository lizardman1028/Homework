import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        <div>
          <button onClick={this.handleIncrement}>Increment by 1</button>
          <button onClick={this.handleDecrement}>Decrement by 1</button>
        </div>
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

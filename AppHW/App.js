import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
state = {count: 9}  
handleIncrement = () => {
  setState({ count: this.state.count + 1 })
}
handleDecrement = () => {
  setState({ count: this.state.count - 1 })
}
// export default class App extends React.Component {

// 
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Yeetus der Fötus</Text>
//         <Text>{this.state.testVar}</Text>
//         {/* <Button
//           onPress={handleIncrement}
//           title='UP'
//           color='#841584'
//         />
//         <Button
//           onPress={handleDecrement}
//           title='DOWN'
//           color='#841584'
//         /> b */}
//       </View>

//     );
//   }
// }
const App = () => {
  const handlePress = () => false
  return (
    
    <View style={styles.container}>
      <Button
        onPress = {this.handleIncrement()}
        title = "UP!"
        color = "green"
      />
      <Text>Yeetus der Fötus</Text>
      <Text>{this.state.count}</Text>
      <Button
        onPress = {this.handleDecrement()}
        title = "DOWN!"
        color = "red"
      />
    </View>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

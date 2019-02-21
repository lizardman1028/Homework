import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
handleIncrement = () => {
     this.setState({ count: this.state.count + 1 })
   }
  
   handleDecrement = () => {
     this.setState({ count: this.state.count - 1 })
   }
// export default class App extends React.Component {
state = {count: 9}
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
        onPress = {handlePress}
        title = "Red button!"
        color = "red"
      />
      <Text>Yeetus der Fötus</Text>
      <Text>{this.state.count}</Text>
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

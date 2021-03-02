import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { block } from 'react-native-reanimated';

export class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxcontainer}>
        <h1>Bienvenidos</h1>
        <Button color='#45FF82' style={styles.button1}
             title="Ingresar"
             onPress={() =>
             this.props.navigation.navigate('Ingresar', { name: 'Ingresar' })}
         />
         <br/>
        <Button color='red' style={styles.button2}
             title="Registrate"
             onPress={() =>
             this.props.navigation.navigate('Registrate', { name: 'Registrate' })}
         />
      </View>
      </View>
    )
  }
}


export default Welcome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });

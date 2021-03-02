import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export class Ingresar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxcontainer}>

        <h1 style={styles.h1}>Bienvenidos</h1>

        <h3 style={styles.h3}> Ingrese correo </h3>

        <input type="email" placeholder="Correo" style={styles.input}/>

        <h3 style={styles.h3}> Ingrese contraseña </h3>
        <input type="password" placeholder="Contraseña" style={styles.input}/>

        <Button 
        style={styles.Button}
             title="Menu"
             onPress={() =>
             this.props.navigation.navigate('Menu', { name: 'Menu' })}
         />
      </View>
      </View>
    )
  }
}

export default Ingresar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
   boxcontainer: {
    width: '500px',
    height: '500px',
    flex: 1,
    backgroundColor: '',
    
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  Button:{
    backgroundColor: 'black'
  },
});  

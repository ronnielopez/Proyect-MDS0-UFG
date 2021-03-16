import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import ImagePicker from "react-native-image-picker"


const Categorias = () => {
    return (
      

        
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
      <h1 style={styles.h1}>Categorias</h1>
        <Button color='blue' style={styles.button2}
             title="Perfil"
             onPress={() =>
             this.props.navigation.navigate('Perfil', { name: 'Perfil' })}
         />
         <Button color='blue' style={styles.button2}
             title="Medicamentos"
         />

         <Button color='blue' style={styles.button2}
             title="Citas"
         />
         <Button color='blue' style={styles.button2}
             title="Clinicas"
         />
      </View>
    </View>
    );
};

export default Categorias ;

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
    backgroundColor: 'black',
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  button2:{
    margin: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 3,
  }
});  



import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const Perfil = () => {
    return (

        
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
          
          <h1 style={styles.h1}>Perfil de Usuario</h1>
          <h2 style={styles.h3}>Cambiar contraseña</h2>
          <h3 style={styles.h3}> Contraseña vieja </h3> <input type="password" placeholder="Contraseña"/>
          <h3 style={styles.h3}> Contaseña nueva </h3> <input type="password" placeholder="Contraseña nueva"/>
          <h3 style={styles.h3}> Confirmar contraseña nueva </h3> <input type="password" placeholder="Confirmar contraseña nueva"/>
        
        <Button style={styles.Button}
             title="Cambiar contraseña"
         /> 
      </View>
    </View>
    );
};

export default Perfil;

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
  });  


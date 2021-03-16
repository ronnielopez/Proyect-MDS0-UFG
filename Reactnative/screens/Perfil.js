import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'
import ImagePicker from "react-native-image-picker"


const Perfil = () => {
  
    return (

        
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
     
        <h1 style={styles.h1}>Perfil de Usuario</h1>
        <Image style={{resizeMode: "contain",
            height: 100,
            width: 200}} source={require('./images/perfil.png')} />
        <h1 style={styles.h3}>Información</h1>
        <h3 style={styles.h3}> Nombre de Usuario </h3> <p> Juan123</p>
        

        <h2 style={styles.h2}>Correo electronico</h2>
        <h3 style={styles.h3}> Correo Electronico actual </h3> <p> JuanPérez@gmail.com</p>
        <h3 style={styles.h3}> Correo Electronico nuevo </h3><input type="text" placeholder="Ejemplo@Correo.com"/>
        <br></br>
        <Button style={styles.Button}
             title="Cambiar correo electronico"
         /> 
        <br></br>
        <h2 style={styles.h2}>Contraseña</h2>
        <h3 style={styles.h3}> Contraseña vieja </h3> <input type="password" placeholder="Contraseña"/>
        <h3 style={styles.h3}> Contaseña nueva </h3> <input type="password" placeholder="Contraseña nueva"/>
        <h3 style={styles.h3}> Confirmar contraseña nueva </h3> <input type="password" placeholder="Confirmar contraseña nueva"/>
        <br></br>
        <Button style={styles.Button}
             title="Cambiar contraseña"
         /> 
      </View>
    </View>
    );
};

export default Perfil ;

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


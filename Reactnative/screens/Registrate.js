import React from 'react'
import { View, Button, StyleSheet} from 'react-native'


const Registrate = () => {
    return (
    <View style={styles.container}>
      <View style={styles.boxcontainer}>

      <h1 style={styles.h1}>Bienvenidos</h1>

        <h3 style={styles.h3}> Ingrese correo </h3>
        <input type="email" placeholder="Correo"/>

        <h3 style={styles.h3}> Ingrese contraseña </h3>
        <input type="password" placeholder="Contraseña"/>

        <h3 style={styles.h3}> Confirmar contraseña </h3>
        <input type="password" placeholder="Confirmar Contraseña"/>
        
        <Button style={styles.Button}
             title="Ingresar"
             onPress={() =>
             this.props.navigation.navigate('Ingresar', { name: 'Ingresar' })}
         /> 
      </View>
    </View>
    );
};

export default Registrate;

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


            
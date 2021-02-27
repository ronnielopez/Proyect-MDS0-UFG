import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Bienvenidos es un gusto tenerlos</Text>
            <Button
             title="Ingresar"
             onPress={() =>
             navigation.navigate('Login', { name: 'Ingresar' })}
              /> 
              
              <Button
             title="Registrar"
             onPress={() =>
             navigation.navigate('Singup', { name: 'Registrar' })}
              /> 
              
              <StatusBar style="auto" />
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

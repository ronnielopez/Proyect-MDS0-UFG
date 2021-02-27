import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Prueba de login pasar a Registrar</Text>
            <Button
             title="Registar"
             onPress={() =>
             navigation.navigate('Singup', { name: 'rehistrar' })}
              /> 
            
            <StatusBar style="auto" />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

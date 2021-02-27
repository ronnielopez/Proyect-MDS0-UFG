import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
             title="Ingresar"
             onPress={() =>
             navigation.navigate('Menu', { name: 'menu' })}
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
  

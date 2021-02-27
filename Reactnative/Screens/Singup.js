import React from 'react'
import { View, Text, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Singup = () => {
    return (
        <View>
            <Text>Prueba de singup
            </Text>
            <Button
             title="Ingresar"
             onPress={() =>
             this.props.navigation.navigate('Login', { name: 'Ingresar' })}
              /> 
            
            <StatusBar style="auto" />
        </View>
    );
};

export default Singup

import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from '../Screens/Login';
import SingupScreen from '../Screens/Singup';


const Stack = createStackNavigator();

const Surf = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Ingresar"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
         name="Registrar" 
         component={SingupScreen} 
         />

      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Surf;

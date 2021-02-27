import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from '../screens/Login';
import Singup from '../screens/Singup';
import Menu from '../screens/Menu';
import Welcome from "../screens/Welcome";


const Stack = createStackNavigator();

const Navigate = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Bienvenidos"
          component={Welcome}
          options={{ title: 'Bienvenidos' }}
        />

        <Stack.Screen
          name="Ingresar"
          component={Login}
        />

        <Stack.Screen
         name="Registrar" 
         component={Singup} 
         />
         
         <Stack.Screen
         name="Menu" 
         component={Menu} 
         />

      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Navigate;

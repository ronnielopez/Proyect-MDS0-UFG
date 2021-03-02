import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Welcome from "../screens/Welcome";
import Ingresar from '../screens/Ingresar';
import Registrate from '../screens/Registrate';
import Menu from '../screens/Menu';



const Stack = createStackNavigator();

const Navigate = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen center
          name="Bienvenidos"
          component={Welcome}
        />

        <Stack.Screen center
          name="Ingresar"
          component={Ingresar}
        />

        <Stack.Screen
         name="Registrate" 
         component={Registrate} 
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

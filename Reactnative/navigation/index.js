import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createStackNavigator } from 'react-navigation'

import Welcom from '../screens/Welcome';
//import Login from '../screens/Login';
//import Explore from '../screens/Explore';
//import Browse from '../screens/Browse';
//import Product from '../screens/Product';
//import Settings from '../screens/Settings';

import {theme } from '../constants';

const screens = createStackNavigator({
 Welcom,
 //Login,
 //Explore,
 //Browse,
 //Product,
 //Settings,
},{
    defaultNavigationOption:{
        headerStyle:{},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyel:{},
        headerRigthContainerStyel:{},
    }
});

export default createAppContainer(screens);
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoanding, Asset} from 'expo';

import Navigation from './navigation';
import {Block} from './components';
import * as constants from './constants;'

//import all used images
const imges = [
  require('./assets/imagenes/medic1.png'),
  require('./assets/imagenes/medic2.png'),
  require('./assets/imagenes/medic3.png'),
];


export default class App extends React.Component {
  state ={
    isLoadingComplete: false,
  }

  handResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    })
    return Promise.all(cacheImages);
  }

  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return(
        <AppLoanding 
        startAsync={this.handResourcesAsync}
        onError={error => console.warn(error)}
        onFinish={()=> this.setState({isLoadingComplete: true})}
        />      
      )
    }

  return (
    <Block>
      <Navigation />
    </Block>
  );
 }
}

const styles = StyleSheet.create({

});
